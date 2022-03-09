// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

import {
    EnumerableSet
} from "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import {
    SafeERC20,
    IERC20
} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {
    ReentrancyGuardUpgradeable
} from "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import {
    Initializable
} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {_transfer, ETH} from "../vendor/gelato/FGelato.sol";
import {Proxied} from "../vendor/proxy/EIP173/Proxied.sol";
import {ITaskTreasury} from "../interfaces/ITaskTreasury.sol";
import {
    ITaskTreasuryUpgradable
} from "../interfaces/ITaskTreasuryUpgradable.sol";
import {LibShares} from "../libraries/LibShares.sol";

contract TaskTreasuryUpgradable is
    ITaskTreasuryUpgradable,
    Proxied,
    Initializable,
    ReentrancyGuardUpgradeable
{
    using EnumerableSet for EnumerableSet.AddressSet;
    using SafeERC20 for IERC20;

    ITaskTreasury public immutable oldTreasury;

    ///@dev tracks token shares of users
    mapping(address => mapping(address => uint256)) public shares;

    ///@dev tracks total shares of tokens
    mapping(address => uint256) public totalShares;

    ///@dev tracks the tokens deposited by users
    mapping(address => EnumerableSet.AddressSet) internal _tokens;

    EnumerableSet.AddressSet internal _whitelistedServices;

    modifier onlyWhitelistedServices() {
        require(
            _whitelistedServices.contains(msg.sender),
            "TaskTreasury: onlyWhitelistedServices"
        );
        _;
    }

    constructor(ITaskTreasury _oldTreasury) {
        oldTreasury = _oldTreasury;
    }

    receive() external payable {
        depositFunds(msg.sender, ETH, msg.value);
    }

    function initialize() external initializer {
        __ReentrancyGuard_init();
    }

    /// @notice Function called by whitelisted services to handle payments, e.g. Gelato Ops
    /// @param _user Address of user whose balance will be deducted
    /// @param _token Token to be used for payment by users
    /// @param _amount Amount to be deducted
    function useFunds(
        address _user,
        address _token,
        uint256 _amount
    ) external override onlyWhitelistedServices {
        uint256 balanceInOld = oldTreasury.userTokenBalance(_user, _token);

        if (_amount <= balanceInOld) {
            oldTreasury.useFunds(_token, _amount, _user);
        } else {
            if (balanceInOld > 0)
                oldTreasury.useFunds(_token, balanceInOld, _user);

            _pay(_user, _token, _amount - balanceInOld);
        }

        emit LogDeductFees(_user, tx.origin, _token, _amount, msg.sender);
    }

    /// @notice Add or remove service that can call useFunds. Gelato Governance
    /// @param _service Service to add or remove from whitelist
    /// @param _isWhitelist Add to whitelist if true, else remove from whitelist
    function updateWhitelistedService(address _service, bool _isWhitelist)
        external
        override
        onlyProxyAdmin
    {
        if (_isWhitelist) {
            _whitelistedServices.add(_service);
        } else {
            _whitelistedServices.remove(_service);
        }
    }

    /// @notice Helper func to get all deposited tokens by a user.
    /// @param _user User to get the balances from
    function getCreditTokensByUser(address _user)
        external
        view
        override
        returns (address[] memory)
    {
        uint256 length = _tokens[_user].length();
        address[] memory creditTokens = new address[](length);

        for (uint256 i; i < length; i++) {
            creditTokens[i] = _tokens[_user].at(i);
        }
        return creditTokens;
    }

    /// @notice Get list of services that can call useFunds.
    function getWhitelistedServices()
        external
        view
        override
        returns (address[] memory)
    {
        uint256 length = _whitelistedServices.length();
        address[] memory whitelistedServices = new address[](length);

        for (uint256 i; i < length; i++) {
            whitelistedServices[i] = _whitelistedServices.at(i);
        }
        return whitelistedServices;
    }

    /// @notice Get balance of a token owned by user
    /// @param _user User to get balance from
    /// @param _token Token to check balance of
    function userTokenBalance(address _user, address _token)
        external
        view
        override
        returns (uint256)
    {
        uint256 totalBalance = LibShares.contractBalance(_token);
        return
            LibShares.sharesToToken(
                shares[_user][_token],
                totalShares[_token],
                totalBalance
            );
    }

    // solhint-disable max-line-length
    /// @notice Function to deposit Funds which will be used to execute transactions on various services
    /// @param _receiver Address receiving the credits
    /// @param _token Token to be credited, use "0xeeee...." for ETH
    /// @param _amount Amount to be credited
    function depositFunds(
        address _receiver,
        address _token,
        uint256 _amount
    ) public payable override nonReentrant {
        uint256 depositAmount;
        uint256 totalBalance;
        if (_token == ETH) {
            depositAmount = msg.value;
        } else {
            require(msg.value == 0, "TaskTreasury: No ETH");
            IERC20 token = IERC20(_token);

            uint256 preBalance = token.balanceOf(address(this));
            token.safeTransferFrom(msg.sender, address(this), _amount);
            uint256 postBalance = token.balanceOf(address(this));

            depositAmount = postBalance - preBalance;
        }

        totalBalance = LibShares.contractBalance(_token) - depositAmount;

        _creditUser(_receiver, _token, depositAmount, totalBalance);

        emit FundsDeposited(_receiver, _token, depositAmount);
    }

    /// @notice Function to withdraw Funds back to the _receiver
    /// @param _receiver Address receiving the credits
    /// @param _token Token to be credited, use "0xeeee...." for ETH
    /// @param _amount Amount to be credited
    function withdrawFunds(
        address payable _receiver,
        address _token,
        uint256 _amount
    ) public override nonReentrant {
        _deductUser(msg.sender, _token, _amount);

        _transfer(_receiver, _token, _amount);

        emit FundsWithdrawn(_receiver, msg.sender, _token, _amount);
    }

    function _creditUser(
        address _user,
        address _token,
        uint256 _amount,
        uint256 _totalBalance
    ) internal {
        uint256 sharesToCredit = LibShares.tokenToShares(
            _amount,
            totalShares[_token],
            _totalBalance
        );

        shares[_user][_token] += sharesToCredit;
        totalShares[_token] += sharesToCredit;

        _tokens[_user].add(_token);
    }

    function _deductUser(
        address _user,
        address _token,
        uint256 _amount
    ) internal {
        uint256 totalBalance = LibShares.contractBalance(_token);
        uint256 sharesToCharge = LibShares.tokenToShares(
            _amount,
            totalShares[_token],
            totalBalance
        );
        uint256 sharesOfUser = shares[_user][_token];

        shares[_user][_token] = sharesOfUser - sharesToCharge;
        totalShares[_token] -= sharesToCharge;

        if (sharesOfUser == sharesToCharge) _tokens[_user].remove(_token);
    }

    function _pay(
        address _user,
        address _token,
        uint256 _amount
    ) internal {
        require(_user != _proxyAdmin(), "TaskTreasury: No proxy admin");

        uint256 totalBalance = LibShares.contractBalance(_token);
        uint256 sharesToPay = LibShares.tokenToShares(
            _amount,
            totalShares[_token],
            totalBalance
        );

        shares[_user][_token] -= sharesToPay;
        shares[_proxyAdmin()][_token] += sharesToPay;
    }
}
