import React from "react";
import { useContractKit } from "@celo-tools/use-contractkit";
import IERC20_ABI from "../abis/dahlia_contracts/IERC20.json"
import { IERC20 } from "../generated/IERC20";
import { useAsyncState } from "../hooks/useAsyncState";
import { isAddress, toBN, AbiItem } from "web3-utils";
import { getAddress } from "ethers/lib/utils";
import { Bank } from "../config";
import { Token } from "../utils/token";


export const useERCmulti = (tokens: Token[]) => {
  const { kit , address, network } = useContractKit();
  const userAddress = address; 
  const call = React.useCallback(async () => {
      let arr = [];
      for (let token of tokens) {
        const address = token.address;
        if (!address || !isAddress(address) || !userAddress) {
            arr.push(null);
        };
        const ERCToken = (new kit.web3.eth.Contract(
            IERC20_ABI.abi as AbiItem[],
            address,
          ) as unknown) as IERC20;
          const allowance = toBN(
            await ERCToken.methods.allowance(userAddress!, Bank[network.chainId]).call()
          );
          const balance = toBN(await ERCToken.methods.balanceOf(userAddress!).call());
          arr.push({allowance, balance});
      }
      return arr;
  }, [kit, userAddress, tokens]);
  return useAsyncState(null, call);
};
