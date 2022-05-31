// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import {LibDataTypes} from "../libraries/LibDataTypes.sol";
import {ITaskTreasuryUpgradable} from "./ITaskTreasuryUpgradable.sol";

interface IOps {
    /// @notice External functions ///

    function createTask(
        address execAddress,
        bytes calldata execData,
        LibDataTypes.ModuleData calldata moduleData,
        address feeToken
    ) external returns (bytes32 taskId);

    function cancelTask(bytes32 _taskId) external;

    function exec(
        address _taskCreator,
        address _execAddress,
        bytes memory _execData,
        LibDataTypes.ModuleData calldata _moduleData,
        uint256 _txFee,
        address _feeToken,
        bool _useTaskTreasuryFunds,
        bool _revertOnFailure
    ) external;

    function exec(
        uint256 _txFee,
        address _feeToken,
        address _taskCreator,
        bool _useTaskTreasuryFunds,
        bool _revertOnFailure,
        bytes32 _resolverHash,
        address _execAddress,
        bytes memory _execData
    ) external;

    /// @notice External view functions ///

    function getFeeDetails() external view returns (uint256, address);

    function getTaskIdsByUser(address _taskCreator)
        external
        view
        returns (bytes32[] memory);

    function taskTreasury() external view returns (ITaskTreasuryUpgradable);
}
