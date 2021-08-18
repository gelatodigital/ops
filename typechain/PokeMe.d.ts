/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PokeMeInterface extends ethers.utils.Interface {
  functions: {
    "cancelTask(bytes32)": FunctionFragment;
    "createTask(address,bytes4,address,bytes,bool)": FunctionFragment;
    "exec(uint256,address,address,bool,bytes32,address,bytes)": FunctionFragment;
    "execAddresses(bytes32)": FunctionFragment;
    "gelato()": FunctionFragment;
    "getResolverHash(address,bytes)": FunctionFragment;
    "getSelector(string)": FunctionFragment;
    "getTaskId(address,address,bytes4,bool,bytes32)": FunctionFragment;
    "getTaskIdsByUser(address)": FunctionFragment;
    "taskCreator(bytes32)": FunctionFragment;
    "taskTreasury()": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancelTask",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createTask",
    values: [string, BytesLike, string, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "exec",
    values: [
      BigNumberish,
      string,
      string,
      boolean,
      BytesLike,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "execAddresses",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "gelato", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getResolverHash",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getSelector", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getTaskId",
    values: [string, string, BytesLike, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTaskIdsByUser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "taskCreator",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "taskTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cancelTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exec", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "execAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gelato", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getResolverHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSelector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTaskId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTaskIdsByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taskCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taskTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "ExecSuccess(uint256,address,address,bytes,bytes32)": EventFragment;
    "TaskCancelled(bytes32,address)": EventFragment;
    "TaskCreated(address,address,bytes4,address,bytes32,bytes,bool,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExecSuccess"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TaskCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TaskCreated"): EventFragment;
}

export class PokeMe extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PokeMeInterface;

  functions: {
    cancelTask(
      _taskId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createTask(
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      _useTaskTreasuryFunds: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exec(
      _txFee: BigNumberish,
      _feeToken: string,
      _taskCreator: string,
      _useTaskTreasuryFunds: boolean,
      _resolverHash: BytesLike,
      _execAddress: string,
      _execData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execAddresses(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    gelato(overrides?: CallOverrides): Promise<[string]>;

    getResolverHash(
      _resolverAddress: string,
      _resolverData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSelector(_func: string, overrides?: CallOverrides): Promise<[string]>;

    getTaskId(
      _taskCreator: string,
      _execAddress: string,
      _selector: BytesLike,
      _useTaskTreasuryFunds: boolean,
      _resolverHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTaskIdsByUser(
      _taskCreator: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    taskCreator(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    taskTreasury(overrides?: CallOverrides): Promise<[string]>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  cancelTask(
    _taskId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createTask(
    _execAddress: string,
    _execSelector: BytesLike,
    _resolverAddress: string,
    _resolverData: BytesLike,
    _useTaskTreasuryFunds: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exec(
    _txFee: BigNumberish,
    _feeToken: string,
    _taskCreator: string,
    _useTaskTreasuryFunds: boolean,
    _resolverHash: BytesLike,
    _execAddress: string,
    _execData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execAddresses(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  gelato(overrides?: CallOverrides): Promise<string>;

  getResolverHash(
    _resolverAddress: string,
    _resolverData: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getSelector(_func: string, overrides?: CallOverrides): Promise<string>;

  getTaskId(
    _taskCreator: string,
    _execAddress: string,
    _selector: BytesLike,
    _useTaskTreasuryFunds: boolean,
    _resolverHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getTaskIdsByUser(
    _taskCreator: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  taskCreator(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  taskTreasury(overrides?: CallOverrides): Promise<string>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cancelTask(_taskId: BytesLike, overrides?: CallOverrides): Promise<void>;

    createTask(
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      _useTaskTreasuryFunds: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    exec(
      _txFee: BigNumberish,
      _feeToken: string,
      _taskCreator: string,
      _useTaskTreasuryFunds: boolean,
      _resolverHash: BytesLike,
      _execAddress: string,
      _execData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    execAddresses(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    gelato(overrides?: CallOverrides): Promise<string>;

    getResolverHash(
      _resolverAddress: string,
      _resolverData: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getSelector(_func: string, overrides?: CallOverrides): Promise<string>;

    getTaskId(
      _taskCreator: string,
      _execAddress: string,
      _selector: BytesLike,
      _useTaskTreasuryFunds: boolean,
      _resolverHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getTaskIdsByUser(
      _taskCreator: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    taskCreator(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    taskTreasury(overrides?: CallOverrides): Promise<string>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    ExecSuccess(
      txFee?: BigNumberish | null,
      feeToken?: string | null,
      execAddress?: string | null,
      execData?: null,
      taskId?: null
    ): TypedEventFilter<
      [BigNumber, string, string, string, string],
      {
        txFee: BigNumber;
        feeToken: string;
        execAddress: string;
        execData: string;
        taskId: string;
      }
    >;

    TaskCancelled(
      taskId?: null,
      taskCreator?: null
    ): TypedEventFilter<
      [string, string],
      { taskId: string; taskCreator: string }
    >;

    TaskCreated(
      taskCreator?: null,
      execAddress?: null,
      selector?: null,
      resolverAddress?: null,
      taskId?: null,
      resolverData?: null,
      useTaskTreasuryFunds?: null,
      resolverHash?: null
    ): TypedEventFilter<
      [string, string, string, string, string, string, boolean, string],
      {
        taskCreator: string;
        execAddress: string;
        selector: string;
        resolverAddress: string;
        taskId: string;
        resolverData: string;
        useTaskTreasuryFunds: boolean;
        resolverHash: string;
      }
    >;
  };

  estimateGas: {
    cancelTask(
      _taskId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createTask(
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      _useTaskTreasuryFunds: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exec(
      _txFee: BigNumberish,
      _feeToken: string,
      _taskCreator: string,
      _useTaskTreasuryFunds: boolean,
      _resolverHash: BytesLike,
      _execAddress: string,
      _execData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execAddresses(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gelato(overrides?: CallOverrides): Promise<BigNumber>;

    getResolverHash(
      _resolverAddress: string,
      _resolverData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSelector(_func: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTaskId(
      _taskCreator: string,
      _execAddress: string,
      _selector: BytesLike,
      _useTaskTreasuryFunds: boolean,
      _resolverHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTaskIdsByUser(
      _taskCreator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    taskCreator(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    taskTreasury(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelTask(
      _taskId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createTask(
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      _useTaskTreasuryFunds: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exec(
      _txFee: BigNumberish,
      _feeToken: string,
      _taskCreator: string,
      _useTaskTreasuryFunds: boolean,
      _resolverHash: BytesLike,
      _execAddress: string,
      _execData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execAddresses(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gelato(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getResolverHash(
      _resolverAddress: string,
      _resolverData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSelector(
      _func: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTaskId(
      _taskCreator: string,
      _execAddress: string,
      _selector: BytesLike,
      _useTaskTreasuryFunds: boolean,
      _resolverHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTaskIdsByUser(
      _taskCreator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taskCreator(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taskTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}