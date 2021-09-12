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

export interface IAny extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): IAny;
  clone(): IAny;
  methods: {
    _setCreditLimit(
      arg0: string,
      arg1: number | string | BN
    ): NonPayableTransactionObject<void>;

    accrueInterest(): NonPayableTransactionObject<string>;

    admin(): NonPayableTransactionObject<string>;

    approve(
      arg0: string,
      arg1: number | string | BN
    ): NonPayableTransactionObject<void>;

    balanceOf(arg0: string): NonPayableTransactionObject<string>;

    borrowBalanceCurrent(arg0: string): NonPayableTransactionObject<string>;

    borrowBalanceStored(arg0: string): NonPayableTransactionObject<string>;

    decimals(): NonPayableTransactionObject<string>;

    exchangeRateCurrent(): NonPayableTransactionObject<string>;

    exchangeRateStored(): NonPayableTransactionObject<string>;

    getCELOPx(arg0: string): NonPayableTransactionObject<string>;

    getPositionInfo(arg0: number | string | BN): NonPayableTransactionObject<{
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    getPrice(
      arg0: string,
      arg1: string
    ): NonPayableTransactionObject<{
      0: string;
      1: string;
    }>;

    getReserves(): NonPayableTransactionObject<{
      0: string;
      1: string;
      2: string;
    }>;

    getUnderlyingToken(
      arg0: number | string | BN
    ): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    poolInfo(arg0: number | string | BN): NonPayableTransactionObject<{
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    poolLength(): NonPayableTransactionObject<string>;

    setOracle(arg0: string): NonPayableTransactionObject<void>;

    setPrices(
      arg0: string[],
      arg1: string[],
      arg2: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    setWhitelistSpells(
      arg0: string[],
      arg1: boolean[]
    ): NonPayableTransactionObject<void>;

    setWhitelistTokens(
      arg0: string[],
      arg1: boolean[]
    ): NonPayableTransactionObject<void>;

    symbol(): NonPayableTransactionObject<string>;

    token0(): NonPayableTransactionObject<string>;

    token1(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    work(
      arg0: number | string | BN,
      arg1: string,
      arg2: number | string | BN,
      arg3: number | string | BN,
      arg4: string | number[]
    ): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}