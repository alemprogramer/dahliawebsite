import React from "react";
import {
  Button,
  Card,
  Flex,
  Heading,
  Spinner,
} from "theme-ui";
import { useERC } from "../../../hooks/useERC";
import { useERCmulti } from "../../../hooks/useERCmulti";
import { TokenInputForm } from "../../../components/TokenInputForm";
import { useSetRecoilState, useRecoilState, atom } from 'recoil';
import { BlockText } from "../../../components/BlockText";
import { Token } from "../../../utils/token";
import { toWei, toBN, fromWei, AbiItem } from "web3-utils";
import { lpToken } from "../../../config";
import BN from 'bn.js';
import { TokenAmountInfo } from "../../../components/TokenAmountInfo";
import { useContractKit } from "@celo-tools/use-contractkit";
import UNI_PAIR from "../../../abis/dahlia_contracts/dependencies/ubeswap/ubeswap@mainnet-v1/IUniswapV2Pair.json"
import { IUniswapV2Pair } from "../../../generated/IUniswapV2Pair";
import { useAsyncState } from "../../../hooks/useAsyncState";
import { getAddress } from "ethers/lib/utils";
import { addPageState, addPage, addPositionState } from "../../../pages/Position/Add/add";
import { poolState } from "../../../pages/Farm/newFarm/NewFarm";

interface supplyProps {
  tokenSupply: BN[] | null;
  lpSupply: BN | null;
  existingBalance: BN[] | null; 
}

const emptyAddSupplyState : supplyProps = {
  tokenSupply: null,
  lpSupply: null,
  existingBalance: null,
}

export const addSupplyState = atom({
  key: 'addSupplyState',
  default: emptyAddSupplyState
})

export const Supply: React.FC = () => {
  const [pool] = useRecoilState(poolState);
  const setPage = useSetRecoilState(addPageState)
  const [buttonLoading, setButtonLoading] = React.useState(true); 
  const setSupply = useSetRecoilState(addSupplyState);
  const [position] = useRecoilState(addPositionState); 

  const { kit } = useContractKit();

  const lpTok: Token = new Token({
    ...lpToken,
    address: pool.lp,
  });
  const [erc] = useERC(lpTok.address);
  const [tokenStates] = useERCmulti(pool.tokens)
  
  const [amounts, setAmounts] = React.useState(Array<string>(pool.tokens.length).fill("0"))

  React.useEffect(() => setAmounts(Array<string>(pool.tokens.length).fill("0")), [pool.tokens.length])

  const [lpAmount, setLPAmount] = React.useState("0")
  
  const lp = React.useMemo(() => (new kit.web3.eth.Contract(
    UNI_PAIR.abi as AbiItem[],
    pool.lp,
  ) as unknown) as IUniswapV2Pair, [kit.web3.eth.Contract, pool.lp]); 

  const call = React.useCallback(async () => {
    try {
        console.log('in call')
        const totalSupply = toBN(await lp.methods.totalSupply().call());
        console.log('got total supply')
        let reserve0: BN;
        let reserve1: BN ; 
        const getReserves = await lp.methods.getReserves().call();
        console.log('got reserves')
        const balance = toBN(position.collateralSize!); 
        if (getAddress(await lp.methods.token0().call()) === getAddress(pool.tokens[0]!.address)) {
          reserve0 = toBN(getReserves.reserve0);
          reserve1 = toBN(getReserves.reserve1);
        } else {
          reserve0 = toBN(getReserves.reserve1);
          reserve1 = toBN(getReserves.reserve0);
        }
        console.log('returning')
        return [reserve0, reserve1].map((reserve) => reserve.mul(balance).div(totalSupply))
    } catch (error) {
        console.log(error)
    }
    
}, [position, lp.methods, pool.tokens])

  const [info] = useAsyncState(null, call);

  const continueButton = (
    <Button
      onClick={() => {
        setSupply({
          tokenSupply: amounts.map((x) => toBN(toWei(x))),
          lpSupply: toBN(toWei(lpAmount)),
          existingBalance: info!, 
        });
        setPage(addPage.Borrow); 
      }}
      >
        Continue
      </Button>
  )

  const invalid = (<Button disabled>Enter a valid amount</Button>)
  const insufficient = (<Button disabled={true}>Insufficient funds</Button>);

  let button = continueButton;
  if (amounts.length === 0) return null;
  if (tokenStates) {
    for (let i = 0; i < tokenStates.length; i += 1) {
      if (tokenStates[i]){
        const fmtCost = amounts[i] === "" ? "0" : amounts[i]!;
        const amountBN = toBN(toWei(fmtCost))
        if (Number(fmtCost) < 0 || amounts[i] === "") {
          button = invalid;
        } else if (tokenStates[i]?.balance.lt(amountBN)) {
          button = insufficient;
        } 
      }
    }
    if (erc) {
      const fmtCost = lpAmount === "" ? "0" : lpAmount;
      const amountBN = toBN(toWei(lpAmount))
      if (Number(fmtCost) < 0 || lpAmount === "") {
        button = invalid;
      } else if (erc.balance.lt(amountBN)) {
        button = insufficient;
      }
      if (amounts.every((x) => x === "0") && lpAmount === "0") button = invalid; 
      if (buttonLoading) setButtonLoading(false); 
    }
  }

  return (
    <Flex sx={{ alignItems: "center", flexDirection: "column" }}>
      <Card sx={{ width: "100%", maxWidth: "800px" }} py={4} px={3}>
        <Flex mb={4}>
          <Heading as="h2" mr={2}>
            Farm
          </Heading>
        </Flex>
        <Flex sx={{flexDirection: "column", gap: "25px", mb: 10}}>
          <BlockText variant="primary">My position has</BlockText>
          <Flex sx={{ justifyContent: "left", gap: "8px", alignItems: "center"}}>
            {info && pool.tokens.map((tok, index) => 
            <Flex
            sx={{
              alignItems: "center",
              mr: 4,
              padding:2,
              borderStyle: "solid",
              borderRadius: "10px",
            }}
          >
              <TokenAmountInfo key={tok.address+position.positionId} token={tok} amount={fromWei(info![index]!)} />       
            </Flex>
          )}
          </Flex>
        </Flex>
        <Flex sx={{flexDirection: "column", gap: "25px", mb: 10}}>
          <BlockText variant="primary">Supply More</BlockText>
          {pool.tokens.map((tok, index) => 
            <TokenInputForm key={tok.address + position.positionId} token={tok} amount={amounts[index]!}
             setAmount={(s: string) => setAmounts(amounts.map((x, i) => i === index ? s : x))} 
             balance={tokenStates && tokenStates![index]! ? tokenStates![index]?.balance! : null}
            />
          )}
        </Flex>
        <Flex sx={{mt: "25px"}}>
          <BlockText variant="primary">Supply LP Token</BlockText>
        </Flex>
        <TokenInputForm token={lpTok} amount={lpAmount} setAmount={setLPAmount} balance={erc ? erc.balance : null}/>
        <Flex sx={{ justifyContent: "center", mt: 6 }}>
          {buttonLoading ? (
              <Spinner />
            ) : (
              button
            )}
        </Flex>
      </Card>
    </Flex>
  );
};