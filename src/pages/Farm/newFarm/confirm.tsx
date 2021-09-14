import React from "react";
import {
  Button,
  Card,
  Flex,
  Heading,
  Text,
  Spinner,
} from "theme-ui";
import { DEFAULT_GAS_PRICE } from "../../../config";
import { CaretLeft } from "phosphor-react";
import { useContractKit } from "@celo-tools/use-contractkit";
import { useERC } from "../../../hooks/useERC";
import { useERCmulti } from "../../../hooks/useERCmulti";
import { useSetRecoilState, useRecoilState } from 'recoil';
import { farmPageState, farmPage, poolState } from "../../../pages/Farm/newFarm/NewFarm";
import { BlockText } from "../../../components/BlockText";
import { Token } from "../../../utils/token";
import { lpToken, Bank } from "../../../config";
import { TokenAmountInfo } from "../../../components/TokenAmountInfo";
import { newSupplyState } from "../../../pages/Farm/newFarm/supply";
import { newBorrowState } from "./borrow";
import { fromWei, AbiItem } from "web3-utils";
import { toastTx } from "../../../utils/toastTx";
import { toast } from "react-toastify";
import BANK_ABI from "../../../abis/dahlia_contracts/HomoraBank.json";
import UNI_SPELL from "../../../abis/dahlia_contracts/UniswapV2SpellV1.json";
import { HomoraBank } from "../../../generated/HomoraBank";
import { UniswapV2SpellV1 } from "../../../generated/UniswapV2SpellV1";
import { getAddress } from "ethers/lib/utils";
import { MaxUint256 } from "@ethersproject/constants";
import ERC20_ABI from "../../../abis/fountain_of_youth/ERC20.json";
import { ERC20 } from "../../../generated/ERC20";
import { humanFriendlyNumber } from "../../../utils/number";


export const Confirm: React.FC = () => {
  const { getConnectedKit, network } = useContractKit();
  const [approveLoading, setApproveLoading] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [buttonLoading, setButtonLoading] = React.useState(true); 
  const [pool] = useRecoilState(poolState);
  const setPage = useSetRecoilState(farmPageState)
  const [supply] = useRecoilState(newSupplyState); 
  const [borrow] = useRecoilState(newBorrowState);

  const lpTok: Token = new Token({
    ...lpToken,
    address: pool.lp,
  });
  
  const [tokenStates, refetchTokenStates] = useERCmulti(pool.tokens)
  const [erc, refetchERC] = useERC(lpTok.address, Bank[network.chainId]);

  const approveButton = (token: Token): any => {
    return (
    <Button
      onClick={async () => {
        const kit = await getConnectedKit();
        // kit is connected to a wallet
        try {
          setApproveLoading(true);
          const ERCToken = (new kit.web3.eth.Contract(
            ERC20_ABI as AbiItem[],
            token.address!,
          ) as unknown) as ERC20; 
          const tx = await ERCToken.methods
            .approve(Bank[network.chainId], MaxUint256.toString())
            .send({
              from: kit.defaultAccount,
              gasPrice: DEFAULT_GAS_PRICE,
            });
          toastTx(tx.transactionHash);
          refetchERC();
          refetchTokenStates();
        } catch (e: any) {
          toast(e.message);
        } finally {
          setApproveLoading(false);
        }
      }}
    >
      {"Approve ".concat(token.symbol)}
    </Button>
  )};

  const confirmButton = (
    <Button
      onClick={async () => {
        const kit = await getConnectedKit();
        // kit is connected to a wallet
        try {
          setConfirmLoading(true);
          const bank = (new kit.web3.eth.Contract(
            BANK_ABI.abi as AbiItem[],
            getAddress(Bank[network.chainId])
            ) as unknown) as HomoraBank;
          const spell = (new kit.web3.eth.Contract(
            UNI_SPELL.abi as AbiItem[],
            getAddress(pool.spell),
          ) as unknown) as UniswapV2SpellV1;
          const bytes = spell.methods.addLiquidityWStakingRewards(
            pool.tokens[0]!.address, 
            pool.tokens[1]!.address, 
            [
              supply.tokenSupply![0]!.toString(),
              supply.tokenSupply![1]!.toString(), 
              supply.lpSupply!.toString(), 
              borrow.tokenBorrow![0]!.toString(), 
              borrow.tokenBorrow![1]!.toString(), 
              0, 
              0, 
              0
            ],
            pool.wrapper,
          ).encodeABI()
          const tx = await bank.methods
            .execute(
                0,
                pool.spell,
                bytes,
            ).send({
              from: kit.defaultAccount,
              gasPrice: DEFAULT_GAS_PRICE,
              gas: 10000000,
            });
          toastTx(tx.transactionHash);
          refetchERC();
        } catch (e: any) {
          toast(e.message);
        } finally {
          setConfirmLoading(false);
        }
      }}
    >
      Confirm
    </Button>
  );
  
  const loading = approveLoading || confirmLoading || buttonLoading;
  const button = React.useMemo(() => {
    let b: any[] = []
    if (tokenStates) {
      for (let i = 0; i < tokenStates.length; i += 1) {
        if (tokenStates[i] ){
          const amountBN = supply.tokenSupply![i]!
          if (amountBN.gt(tokenStates[i]?.allowance!)) {
            b.push(approveButton(pool.tokens![i]!));
            if (buttonLoading) setButtonLoading(false);
          }
        }
      }
      if (b.length === 0) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        b = [confirmButton]; 
        if (buttonLoading) setButtonLoading(false);
      }
    }
    if (erc) {
      const amountBN = supply.lpSupply!;
      if (amountBN.gt(erc.allowance)) {
        b.push(approveButton(lpTok))
      }
      if (buttonLoading) setButtonLoading(false)
    }
    return b; 
  }, [tokenStates, supply, pool.tokens, erc]);

  return (
    <Flex sx={{ alignItems: "center", flexDirection: "column" }}>
      <Card sx={{ width: "100%", maxWidth: "800px" }} py={4} px={3}>
        <Flex
          onClick={() => {
            setPage(farmPage.Borrow);
          }}
          sx={{ alignItems: "center", cursor: "pointer" }}
          mb={4}
        >
          <CaretLeft size={28} />
          <Text>Back</Text>
        </Flex>
        <Flex mb={4}>
          <Heading as="h2" mr={2}>
            Position Breakdown
          </Heading>
        </Flex>
        <Flex sx={{flexDirection: "column", gap: "25px", mb: 10}}>
          <BlockText variant="primary">I'm Supplying</BlockText>
          <Flex sx={{ justifyContent: "left", gap: "8px", alignItems: "center"}}>
            {pool.tokens.map((tok, index) => 
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
        <Flex sx={{flexDirection: "column", gap: "25px", mb: 10}}>
          <BlockText variant="primary">I'm Borrowing</BlockText>
          <Flex sx={{ justifyContent: "left", gap: "8px", alignItems: "center"}}>
            {pool.tokens.map((tok, index) => 
            <Flex
            sx={{
              alignItems: "center",
              mr: 4,
              padding:2,
              borderStyle: "solid",
              borderRadius: "10px",
            }}
          >
              <TokenAmountInfo key={tok.address} token={tok} amount={fromWei(borrow.tokenBorrow![index]!)} />       
            </Flex>
          )}
          </Flex>
        </Flex>
        <Flex sx={{flexDirection: "column", gap: "25px", mb: 10}}>
          <BlockText variant="primary">Position Statistics</BlockText>
          <Flex sx={{ justifyContent: "left", gap: "8px", flexDirection: "column"}}>
              <BlockText>{"Est. Debt Ratio: ".concat(humanFriendlyNumber(borrow.debtRatio!)).concat("/100")}</BlockText>
              <BlockText>{"Leverage: ".concat(humanFriendlyNumber(borrow.lever!)).concat("x")}</BlockText>
              {/* change this to usd value */}
              <BlockText>{"Supply Value: ".concat(" ").concat(humanFriendlyNumber(borrow.supplyValue!)).concat(" Celo")}</BlockText>
              <BlockText>{"Borrow Value: ".concat(" ").concat(humanFriendlyNumber(borrow.borrowValue!)).concat(" Celo")}</BlockText>
              <BlockText>{"Position Value: ".concat(" ").concat(humanFriendlyNumber(borrow.supplyValue! + borrow.borrowValue!)).concat(" Celo")}</BlockText>
              <BlockText>Farming APY: </BlockText>
              <BlockText>Borrow APY: </BlockText>
              <BlockText>Total APY: </BlockText>
          </Flex>
        </Flex>
        <Flex sx={{ justifyContent: "center", mt: 6 }}>
            {loading ? (
              <Spinner />
            ) : (
              <Flex sx={{ justifyContent: "center", gap: "6px"}} >
                {button[0]}
              </Flex>                
            )}
        </Flex>
      </Card>
    </Flex>
  );
};
