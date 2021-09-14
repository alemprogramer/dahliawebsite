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

export interface IUbeswapV1Oracle extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): IUbeswapV1Oracle;
  clone(): IUbeswapV1Oracle;
  methods: {
    CELO(): NonPayableTransactionObject<string>;

    MCELO(): NonPayableTransactionObject<string>;

    addPair(tokenA: string, tokenB: string): NonPayableTransactionObject<void>;

    factory(): NonPayableTransactionObject<string>;

    lastObservation(
      pair: string
    ): NonPayableTransactionObject<[string, string, string]>;

    observationLength(pair: string): NonPayableTransactionObject<string>;

    pairFor(
      tokenA: string,
      tokenB: string
    ): NonPayableTransactionObject<string>;

    pairForCELO(tokenA: string): NonPayableTransactionObject<string>;

    pairForMCELO(tokenA: string): NonPayableTransactionObject<string>;

    pairs(): NonPayableTransactionObject<string[]>;

    periodSize(): NonPayableTransactionObject<string>;

    update(
      tokenA: string,
      tokenB: string
    ): NonPayableTransactionObject<boolean>;

    updateFor(
      i: number | string | BN,
      length: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    updatePair(pair: string): NonPayableTransactionObject<boolean>;

    work(): NonPayableTransactionObject<void>;

    "workable()"(): NonPayableTransactionObject<boolean>;

    "workable(address)"(pair: string): NonPayableTransactionObject<boolean>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}