import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useContractKit } from "@celo-tools/use-contractkit";
import { Button } from "theme-ui";
import { useHistory } from "react-router-dom";
import { AbiItem, toBN } from "web3-utils";
import BANK_ABI from "../../abis/dahlia_contracts/HomoraBank.json";
import CERC20_ABI from "../../abis/fountain_of_youth/CErc20Immutable.json";
import PROXYORACLE_ABI from "../../abis/dahlia_contracts/ProxyOracle.json";
import { HomoraBank } from "../../generated/HomoraBank";
import { ProxyOracle } from "../../generated/ProxyOracle";
import { CErc20Immutable } from "../../generated/CErc20Immutable";
import { Bank } from "../../config";
import React from "react";
import { useAsyncState } from "../../hooks/useAsyncState";
import { getAddress } from "ethers/lib/utils";
import { humanFriendlyWei } from "../../utils/eth";
import { FarmInfo } from "../../components/FarmInfo";
import { Flex } from "theme-ui";
import { TokenBorrowInfo } from "../../components/TokenBorrowInfo";
import { poolProps } from "../../pages/Farm/newFarm/NewFarm";

export const FarmEntry: React.FC<poolProps> = (props: poolProps) => {

  const { kit, network } = useContractKit();
  const history = useHistory();

  const bank = React.useMemo(() => (new kit.web3.eth.Contract(
    BANK_ABI.abi as AbiItem[],
    getAddress(Bank[network.chainId])
  ) as unknown) as HomoraBank, [kit, network]); 

  const call = React.useCallback(async () => {
    try {
        const borrows = [];
        const factors = [];
        const oracle = await bank.methods.oracle().call();
        const proxyOracle = (new kit.web3.eth.Contract(
          PROXYORACLE_ABI.abi as AbiItem[],
          oracle,
        ) as unknown) as ProxyOracle;
        for (let i: number = 0; i < props.tokens.length; i += 1) {
          const bankInfo =  await bank.methods.getBankInfo(props.tokens[i]!.address).call();
          const factor = await proxyOracle.methods.tokenFactors(props.tokens[i]!.address).call();
          factors.push(factor);
          const cToken = (new kit.web3.eth.Contract(
            CERC20_ABI as AbiItem[],
            bankInfo.cToken,
          ) as unknown) as CErc20Immutable;
          const blocksPerYear = toBN(6311390); 
          const borrowRate = toBN(await cToken.methods.borrowRatePerBlock().call()).mul(blocksPerYear);
          borrows.push(borrowRate);
          }
        return {
          borrowRate: borrows,
          tokenFactor: factors,
        };
    } catch (error) {
        console.log(error)
    }
    
}, [bank.methods, kit.web3.eth.Contract, props.tokens])

  const [info] = useAsyncState(null, call);

  const lever = (factor: {borrowFactor: string, collateralFactor: string}) => {
    return 1 + (Number(factor.collateralFactor) / (Number(factor.borrowFactor) - Number(factor.collateralFactor)))
  }

  const maxLever = info ? Math.max(...(info?.tokenFactor.map((x) => lever({borrowFactor: x.borrowFactor, collateralFactor: x.collateralFactor})))!) : 0;

  const urlext = props.name + "/" + props.wrapper + "/" + props.spell + "/" + props.lp + "/"
    + props.tokens.map((tok) => tok.address)
  return (
    <Row>
      <td>
      <FarmInfo props={props} />
      </td>
      <td>100%</td>
      <td>10%</td>
      <td>
        <Flex sx={{ flexDirection: "column", gap: "6px"}}>
          <span>Trading Fees: 10%</span>
          <span>Yield Farming: 0%</span>
        </Flex>
      </td>
      <td>
        <Flex sx={{ flexDirection: "column", alignItems: "center", gap: "6px"}}>
          {props.tokens.map((tok, index) => (
            <TokenBorrowInfo key={tok.address} token={tok} apy={info && info.borrowRate.length > 0 ? humanFriendlyWei(info.borrowRate[index]!.mul(toBN(100))): "--"} />
          ))}
        </Flex>
      </td>
      <td>{String(maxLever).concat("x")}</td>
      <td
        /* css={css`
          text-align: right;
        `} */
      >
        <Button onClick={() => 
           history.push(`farm/new/${urlext}`)}>
          Farm
        </Button>
      </td>
    </Row>
  );
};

const Row = styled.tr`
  height: 72px;
`;
