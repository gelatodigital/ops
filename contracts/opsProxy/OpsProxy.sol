// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.12;

import {Proxied} from "../vendor/proxy/EIP173/Proxied.sol";
import {GelatoBytes} from "../vendor/gelato/GelatoBytes.sol";
import {_call} from "../functions/FExec.sol";
import {IOpsProxy} from "../interfaces/IOpsProxy.sol";

contract OpsProxy is Proxied, IOpsProxy {
    using GelatoBytes for bytes;

    // solhint-disable const-name-snakecase
    uint256 public constant override version = 1;
    address public immutable override ops;

    modifier onlyAuth() {
        require(
            msg.sender == ops || msg.sender == _proxyAdmin(),
            "OpsProxy: Not authorised"
        );

        _;
    }

    // solhint-disable no-empty-blocks
    constructor(address _ops) {
        ops = _ops;
    }

    receive() external payable {}

    ///@inheritdoc IOpsProxy
    function batchExecuteCall(
        address[] calldata _targets,
        bytes[] calldata _datas,
        uint256[] calldata _values
    ) external payable override onlyAuth {
        uint256 length = _targets.length;
        require(
            length == _datas.length && length == _values.length,
            "OpsProxy: Length mismatch"
        );

        for (uint256 i; i < length; i++)
            _executeCall(_targets[i], _datas[i], _values[i]);
    }

    ///@inheritdoc IOpsProxy
    function executeCall(
        address _target,
        bytes calldata _data,
        uint256 _value
    ) external payable override onlyAuth {
        _executeCall(_target, _data, _value);
    }

    function owner() external view returns (address) {
        return _proxyAdmin();
    }

    function _executeCall(
        address _target,
        bytes calldata _data,
        uint256 _value
    ) private {
        (, bytes memory returnData) = _call(
            _target,
            _data,
            _value,
            true,
            "OpsProxy.executeCall: "
        );

        emit ExecuteCall(_target, _data, _value, returnData);
    }
}
