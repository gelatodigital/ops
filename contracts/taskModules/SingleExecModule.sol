// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.12;

import {
    EnumerableSet
} from "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import {TaskModuleBase} from "./TaskModuleBase.sol";
import {LibEvents} from "../libraries/LibEvents.sol";

contract SingleExecModule is TaskModuleBase {
    using EnumerableSet for EnumerableSet.Bytes32Set;

    function postExecTask(
        bytes32 _taskId,
        address _taskCreator,
        address _execAddress,
        bytes calldata _execData
    ) external override returns (address, bytes memory) {
        _createdTasks[_taskCreator].remove(_taskId);
        delete taskCreator[_taskId];
        delete execAddresses[_taskId];
        delete timedTask[_taskId];

        emit LibEvents.TaskCancelled(_taskId, address(this));

        return (_execAddress, _execData);
    }
}
