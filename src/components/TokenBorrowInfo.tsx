import styled from "@emotion/styled";
import React from "react";
import { Token } from "src/utils/token";

interface Props {
  token: Token;
  apy: string;
}

export const TokenBorrowInfo: React.FC<Props> = ({ token, apy }: Props) => {
  return (
    <Wrapper>
    <img
        key={token.address}
        src={token.logoURL}
        alt={`Icon of token ${token.name} (${token.symbol})`}
    />
    <span>{apy}%</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  height: 24px;
  img {
    height: 100%;
    border-radius: 12px;
  }
`;
