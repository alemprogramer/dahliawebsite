import React from "react";
import {
  Button,
  Card,
  Flex,
  Heading,
  Text,
} from "theme-ui";
import { CaretLeft } from "phosphor-react";
import { useContractKit } from "@celo-tools/use-contractkit";
import { atom, useSetRecoilState, useRecoilState } from 'recoil';
import { BlockText } from "../../../components/BlockText";
import { Token } from "../../../utils/token";
import { lpToken } from "../../../config";
import { TokenAmountInfo } from "../../../components/TokenAmountInfo";
import { fromWei, toWei, toBN, AbiItem } from "web3-utils";
import { TokenSlider } from "../../../components/TokenSlider";
import BANK_ABI from "../../../abis/dahlia_contracts/HomoraBank.json";
import PROXYORACLE_ABI from "../../../abis/dahlia_contracts/ProxyOracle.json";
import COREORACLE_ABI from "../../../abis/dahlia_contracts/CoreOracle.json";
import { HomoraBank } from "../../../generated/HomoraBank";
import { ProxyOracle } from "../../../generated/ProxyOracle";
import { CoreOracle } from "../../../generated/CoreOracle";
import { Bank } from "../../../config";
import { getAddress } from "ethers/lib/utils";
import { useAsyncState } from "../../../hooks/useAsyncState";
import { humanFriendlyNumber } from "../../../utils/number";
import BN from 'bn.js';
import { addPageState, addPage, addPositionState} from "../../../pages/Position/Add/add";
import { addSupplyState } from "../../../pages/Position/Add/supply";
import { poolState } from "../../../pages/Farm/newFarm/NewFarm";
import { CErc20Immutable } from "../../../generated/CErc20Immutable";
import CERC20_ABI from "../../../abis/fountain_of_youth/CErc20Immutable.json";

interface borrowProps {
  tokenBorrow: BN[] | null;
  supplyValue: number | null;
  borrowValue: number | null;
  debtRatio: number | null;
  lever: number | null;
}

const emptyBorrowState : borrowProps = {
  tokenBorrow: null,
  supplyValue: null,
  borrowValue: null,
  debtRatio: null,
  lever: null,
}

export const addBorrowState = atom({
  key: 'addBorrowState',
  default: emptyBorrowState
})

export const Borrow: React.FC = () => {
  const scale = toBN(2).pow(toBN(112)); 
  const [pool]:any = useRecoilState(poolState);
  const setPage = useSetRecoilState(addPageState)
  const zeroAdd = "0x0000000000000000000000000000000000000000"
  const [init, setInit] = React.useState(false)
  const [supply] = useRecoilState(addSupplyState);
  const [position] = useRecoilState(addPositionState); 
  const setBorrow = useSetRecoilState(addBorrowState); 

  const lpTok: Token = new Token({
    ...lpToken,
    address: pool.lp,
  });

  const { kit, network } = useContractKit();
  const [amounts, setAmounts] = React.useState<(String[] | null)>(null)

  const bank = React.useMemo(() => (new kit.web3.eth.Contract(
    BANK_ABI.abi as AbiItem[],
    getAddress(Bank[network.chainId])
  ) as unknown) as HomoraBank, [kit, network]); 

  const call = React.useCallback(async () => {
    try {
        const factors : {
          borrowFactor: string;
          collateralFactor: string;
          liqIncentive: string;
          0: string;
          1: string;
          2: string;
        }[] = [];
        const prices: BN[] = [];
        const availableBorrows: BN[] = [];
        const oracle = await bank.methods.oracle().call();
        const proxyOracle = (new kit.web3.eth.Contract(
          PROXYORACLE_ABI.abi as AbiItem[],
          oracle,
        ) as unknown) as ProxyOracle;

        const source = await proxyOracle.methods.source().call();
        const coreOracle = (new kit.web3.eth.Contract(
          COREORACLE_ABI.abi as AbiItem[],
          source,
        ) as unknown) as CoreOracle;

        for (let token of pool.tokens) {
          const bankInfo =  await bank.methods.getBankInfo(token.address).call();
          const cToken = (new kit.web3.eth.Contract(
            CERC20_ABI as AbiItem[],
            bankInfo.cToken,
          ) as unknown) as CErc20Immutable;
          const totalSupply = toBN(await cToken.methods.totalSupply().call());
          const totalBorrows = toBN(await cToken.methods.totalBorrows().call());
          const totalReserves = toBN(await cToken.methods.totalReserves().call());
          availableBorrows.push(totalSupply.sub(totalBorrows).sub(totalReserves)); 

          const factor = await proxyOracle.methods.tokenFactors(token.address).call();
          factors.push(factor);
          const price = await coreOracle.methods.getCELOPx(token.address).call();
          prices.push(toBN(price));
        }

        const lpPrice = await coreOracle.methods.getCELOPx(pool.lp).call(); 

        const lp = await proxyOracle.methods.asETHCollateral(pool.wrapper, position.collId!, supply.lpSupply!, zeroAdd).call();
        
        const existingCollateral = toBN(await bank.methods.getCollateralETHValue(position.positionId!).call()); 
        const existingBorrow = toBN(await bank.methods.getBorrowETHValue(position.positionId!).call()); 

        const weightedSuppliedCollateralValue = supply.tokenSupply!.map((x, i) => Number(fromWei(x))
          * (Number(fromWei(prices[i]!)) / Number(fromWei(scale))) * (Number(factors[i]?.collateralFactor) / 10000))
          .reduce((sum, current) => sum + current, 0) + Number(fromWei(toBN(lp))) + Number(fromWei(existingCollateral)) - Number(fromWei(existingBorrow));

        const borrowMax = prices.map((x, i) => weightedSuppliedCollateralValue / 
          ((Number(fromWei(x)) / Number(fromWei(scale))) * ((Number(factors[i]?.borrowFactor) - Number(factors[i]?.collateralFactor)) / 10000)));

        const maxAmounts = borrowMax.map((x, index) => String(Math.min(x, Number(fromWei(availableBorrows[index]!))))); 

        if (!init) {
          setInit(true)
          setAmounts(maxAmounts.map((x) => String((Number(x) / 3).toFixed(3))));
        }
  
        return {
          tokenFactor: factors,
          celoPrices: prices,
          lpPrice, 
          maxAmounts,
          existingCollateral, 
          existingBorrow,
        };
    } catch (error) {
        console.log(error)
    }
    
}, [bank.methods, kit.web3.eth.Contract, pool.wrapper, pool?.lp, pool.tokens, init, scale, supply, position])

const [info] = useAsyncState(null, call);

if (!amounts!) return null; 

const borrowValue = info ? amounts!.map((x, i) => Number(x) * (Number(fromWei(info?.celoPrices[i]!)) / Number(fromWei(scale)))).reduce((sum, current) => sum + current, 0) : 0; 
const supplyValue = info ? supply.tokenSupply!.map((x, i) => Number(fromWei(x)) * (Number(fromWei(info?.celoPrices[i]!)) / Number(fromWei(scale)))).reduce((sum, current) => sum + current, 0) : 0; 
const lever =  1 + (borrowValue / supplyValue)

const numer = info ? amounts!.map((x, i) => Number(x) * (Number(fromWei(info?.celoPrices[i]!)) / Number(fromWei(scale)))
  * (Number(info.tokenFactor[i]?.borrowFactor) / 10000))
  .reduce((sum, current) => sum + current, 0) + Number(fromWei(info.existingBorrow)) : 0; 
const denom = info && supply ? amounts!.map((x, i) => (Number(x) + Number(fromWei(supply.tokenSupply![i]!)))
  * (Number(fromWei(info?.celoPrices[i]!)) / Number(fromWei(scale))) * (Number(info.tokenFactor[i]?.collateralFactor) / 10000))
  .reduce((sum, current) => sum + current, 0) + Number(fromWei(info.existingCollateral)) : 1; 
const debtRatio =  (numer/denom) * 100; 

const continueButton = (
  <Button
    onClick={() => {
      setBorrow({
        tokenBorrow: amounts!.map((x) => toBN(toWei(String(x)))),
        lever: lever, 
        debtRatio,
        borrowValue,
        supplyValue,
        });
      setPage(addPage.Confirm); 
    }}
    >
      Continue
    </Button>
)

  return (
    <Flex sx={{ alignItems: "center", flexDirection: "column" }}>
      <Card sx={{ width: "100%", maxWidth: "800px" }} py={4} px={3}>
        <Flex
          onClick={() => {
            setPage(addPage.Supply);
          }}
          sx={{ alignItems: "center", cursor: "pointer" }}
          mb={4}
        >
          <CaretLeft size={28} />
          <Text>Back</Text>
        </Flex>
        <Flex mb={4}>
          <Heading as="h2" mr={2}>
            Farm
          </Heading>
        </Flex>
        <Flex sx={{flexDirection: "column", gap: "25px", mb: 10}}>
          <BlockText variant="primary">My position has</BlockText>
          <Flex sx={{ justifyContent: "left", gap: "8px", alignItems: "center"}}>
            {pool && position && pool.tokens.map((tok:any, index:any) => 
            <Flex
            sx={{
              alignItems: "center",
              mr: 4,
              padding:2,
              borderStyle: "solid",
              borderRadius: "10px",
            }}
          >
              <TokenAmountInfo key={tok.address} token={tok} amount={fromWei(supply.existingBalance![index]!)} />       
            </Flex>
          )}
          </Flex>
        </Flex>
        <Flex sx={{flexDirection: "column", gap: "25px", mb: 10}}>
          <BlockText variant="primary">I'm Supplying</BlockText>
          <Flex sx={{ justifyContent: "left", gap: "8px", alignItems: "center"}}>
            {pool.tokens.map((tok:any, index:any) => 
            <Flex
            sx={{
              alignItems: "center",
              mr: 4,
              padding:2,
              borderStyle: "solid",
              borderRadius: "10px",
            }}
          >
              <TokenAmountInfo key={tok.address} token={tok} amount={fromWei(supply.tokenSupply![index]!)} />       
            </Flex>
          )}
            <Flex
            sx={{
              alignItems: "center",
              mr: 4,
              padding:2,
              borderStyle: "solid",
              borderRadius: "10px",
            }}
            >
              <TokenAmountInfo key={lpTok.address} token={lpTok} amount={fromWei(supply.lpSupply!)} />       
            </Flex>
          </Flex>
        </Flex>
        <Flex sx={{mb: 2, mt: "25px"}}>
          <BlockText variant="primary">I'd like to borrow</BlockText>
        </Flex>
        <BlockText mb={2}>{"Est. Debt Ratio: ".concat(humanFriendlyNumber(debtRatio)).concat("/100")}</BlockText>
        <BlockText mb={2}>{"Leverage: ".concat(humanFriendlyNumber(lever)).concat("x")}</BlockText>
          {info && pool.tokens.map((tok:any, index:any) => 
            <TokenSlider key={tok.address} token={tok} amount={String(amounts![index])}
            setAmount={(s: string) => setAmounts(amounts!.map((x, i) => i === index ? s : x))} 
            max={humanFriendlyNumber(info!.maxAmounts[index]!)}
             />
          )}
        <Flex sx={{ justifyContent: "center", mt: 6 }}>
          {
          (debtRatio > 100) ? (
            <Button disabled={true}>Debt ratio too high</Button>
          ) : (
            continueButton
          )}
        </Flex>
      </Card>
    </Flex>
  );
};