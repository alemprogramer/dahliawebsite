/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export interface IBalancerPool extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): IBalancerPool;
  clone(): IBalancerPool;
  methods: {
    exitPool(
      poolAmoutnIn: number | string | BN,
      minAmountsOut: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    exitswapExternAmountOut(
      tokenOut: string,
      tokenAmountOut: number | string | BN,
      maxPoolAmountIn: number | string | BN
    ): NonPayableTransactionObject<string>;

    getBalance(token: string): NonPayableTransactionObject<string>;

    getFinalTokens(): NonPayableTransactionObject<string[]>;

    getNormalizedWeight(token: string): NonPayableTransactionObject<string>;

    getNumTokens(): NonPayableTransactionObject<string>;

    getSwapFee(): NonPayableTransactionObject<string>;

    joinPool(
      poolAmountOut: number | string | BN,
      maxAmountsIn: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    joinswapExternAmountIn(
      tokenIn: string,
      tokenAmountIn: number | string | BN,
      minPoolAmountOut: number | string | BN
    ): NonPayableTransactionObject<string>;

    swapExactAmountOut(
      tokenIn: string,
      maxAmountIn: number | string | BN,
      tokenOut: string,
      tokenAmountOut: number | string | BN,
      maxPrice: number | string | BN
    ): NonPayableTransactionObject<{
      tokenAmountIn: string;
      spotPriceAfter: string;
      0: string;
      1: string;
    }>;

    totalSupply(): NonPayableTransactionObject<string>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}