// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

import {
    BeaconProxy
} from "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import {
    Initializable
} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {Proxied} from "../vendor/proxy/EIP173/Proxied.sol";
import {OpsUserProxy} from "./OpsUserProxy.sol";
import {IBeacon} from "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";
import {IOpsUserProxy} from "../interfaces/IOpsUserProxy.sol";
import {IOpsUserProxyFactory} from "../interfaces/IOpsUserProxyFactory.sol";

contract OpsUserProxyFactory is
    IOpsUserProxyFactory,
    IBeacon,
    Proxied,
    Initializable
{
    // solhint-disable const-name-snakecase
    uint256 public constant override version = 1;
    address public immutable ops;
    address public override implementation;

    /// @dev track the next seed to be used by an EOA.
    mapping(address => bytes32) internal _nextSeeds;

    /// @dev track deployed proxies
    mapping(address => bool) internal _proxies;

    /// @dev track proxy of user
    mapping(address => address) internal _proxyOf;

    modifier onlyOneProxy(address _account) {
        require(_proxyOf[_account] == address(0), "OpsProxyFactory: One proxy");
        _;
    }

    modifier notProxy(address _account) {
        require(!isProxy(_account), "OpsProxyFactory: No proxy");
        _;
    }

    constructor(address _ops) {
        ops = _ops;
    }

    function initialize(address _implementation) external initializer {
        implementation = _implementation;
    }

    function updateBeaconImplementation(address _implementation)
        external
        override
        onlyProxyAdmin
    {
        address oldImplementation = implementation;
        implementation = _implementation;

        emit BeaconUpdated(oldImplementation, _implementation);
    }

    function deploy() external override returns (address payable proxy) {
        proxy = deployFor(msg.sender);
    }

    function getNextSeed(address _account)
        external
        view
        override
        returns (bytes32)
    {
        return _nextSeeds[_account];
    }

    function getProxyOf(address _account)
        external
        view
        override
        returns (address, bool)
    {
        address proxyAddress = _proxyOf[_account];

        if (proxyAddress != address(0)) return (proxyAddress, true);

        proxyAddress = determineProxyAddress(_account);
        return (proxyAddress, false);
    }

    function getOwnerOf(address _proxy)
        external
        view
        override
        returns (address)
    {
        require(isProxy(_proxy), "OpsProxyFactory: Not proxy");

        return IOpsUserProxy(_proxy).owner();
    }

    function deployFor(address owner)
        public
        override
        onlyOneProxy(owner)
        notProxy(owner)
        returns (address payable proxy)
    {
        (bytes32 seed, bytes32 salt) = _getSeedAndSalt(owner);

        bytes memory bytecode = _getBytecode(owner);

        proxy = _deploy(salt, bytecode);

        _proxies[proxy] = true;
        _proxyOf[owner] = proxy;

        unchecked {
            _nextSeeds[owner] = bytes32(uint256(seed) + 1);
        }

        emit DeployProxy(msg.sender, owner, seed, salt, address(proxy));
    }

    function determineProxyAddress(address _account)
        public
        view
        override
        returns (address)
    {
        address proxyAddress = _proxyOf[_account];
        if (proxyAddress != address(0)) return proxyAddress;

        (, bytes32 salt) = _getSeedAndSalt(_account);

        bytes memory bytecode = _getBytecode(_account);

        bytes32 codeHash = keccak256(
            abi.encodePacked(
                bytes1(0xff),
                address(this),
                salt,
                keccak256(bytecode)
            )
        );

        return address(uint160(uint256(codeHash)));
    }

    function isProxy(address proxy) public view override returns (bool) {
        return _proxies[proxy];
    }

    function _deploy(bytes32 _salt, bytes memory _bytecode)
        internal
        returns (address payable proxy)
    {
        assembly {
            let endowment := 0
            let bytecodeStart := add(_bytecode, 0x20)
            let bytecodeLength := mload(_bytecode)
            proxy := create2(endowment, bytecodeStart, bytecodeLength, _salt)
        }
    }

    function _getSeedAndSalt(address _account)
        internal
        view
        returns (bytes32 seed, bytes32 salt)
    {
        seed = _nextSeeds[_account];

        salt = keccak256(abi.encode(_account, seed));
    }

    function _getBytecode(address _owner) internal view returns (bytes memory) {
        bytes memory opsProxyInitializeData = abi.encodeWithSelector(
            IOpsUserProxy.initialize.selector,
            ops,
            _owner
        );

        return
            abi.encodePacked(
                type(BeaconProxy).creationCode,
                abi.encode(address(this), opsProxyInitializeData)
            );
    }
}
