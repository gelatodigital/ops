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

interface CounterInterface extends ethers.utils.Interface {
  functions: {
    "count()": FunctionFragment;
    "increaseCount(uint256)": FunctionFragment;
    "lastExecuted()": FunctionFragment;
    "pokeMe()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "count", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "increaseCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastExecuted",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pokeMe", values?: undefined): string;

  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastExecuted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pokeMe", data: BytesLike): Result;

  events: {};
}

export class Counter extends BaseContract {
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

  interface: CounterInterface;

  functions: {
    count(overrides?: CallOverrides): Promise<[BigNumber]>;

    increaseCount(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastExecuted(overrides?: CallOverrides): Promise<[BigNumber]>;

    pokeMe(overrides?: CallOverrides): Promise<[string]>;
  };

  count(overrides?: CallOverrides): Promise<BigNumber>;

  increaseCount(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastExecuted(overrides?: CallOverrides): Promise<BigNumber>;

  pokeMe(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    increaseCount(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lastExecuted(overrides?: CallOverrides): Promise<BigNumber>;

    pokeMe(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    increaseCount(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastExecuted(overrides?: CallOverrides): Promise<BigNumber>;

    pokeMe(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseCount(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastExecuted(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pokeMe(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}