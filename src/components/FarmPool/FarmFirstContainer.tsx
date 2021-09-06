import React, { useState } from 'react';
import { useGlobalContext } from '../../context/context';
import styled from 'styled-components';
import ImageCelo from '../../images/eth.png';
import ImageUBE from '../../images/usdt.png';
const FarmFirstContainer = () => {
  const { handleIndexFarm } = useGlobalContext();
  const [firstNumber, setFirstNumber] = useState('0.00');
  const [secondNumber, setSecondNumber] = useState('0.00');
  const [thirdNumber, setThirdNumber] = useState('0.00');
  return (
    <Wrapper>
      <Header>FARM</Header>
      <InfoCard>
        <InfoHeader>I d like to supply</InfoHeader>
        <InputContainer>
          <Balance>Balance 0.000000</Balance>
          <Content>
            <Flex>
              <Image src={ImageCelo} alt='celo' />
              <Coin>CELO</Coin>
            </Flex>
            <Number
              value={firstNumber}
              onChange={(e) => setFirstNumber(e.target.value)}
            ></Number>
            <Max>MAX</Max>
          </Content>
        </InputContainer>
        <InputContainer>
          <Balance>Balance 0.000000</Balance>
          <Content>
            <Flex>
              <Image src={ImageUBE} alt='celo' />
              <Coin>UBE</Coin>
            </Flex>
            <Number
              value={secondNumber}
              onChange={(e) => setSecondNumber(e.target.value)}
            ></Number>
            <Max>MAX</Max>
          </Content>
        </InputContainer>
        <InputContainer>
          <FlexContent>
            <h3>Supply LP Token</h3>
            <Balance>Balance 0.000000</Balance>
          </FlexContent>
          <Content>
            <Flex>
              <Image src={ImageUBE} alt='celo' />
              <Coin>UBE-LP</Coin>
            </Flex>
            <Number
              value={thirdNumber}
              onChange={(e) => setThirdNumber(e.target.value)}
            ></Number>
            <Max>MAX</Max>
          </Content>
        </InputContainer>
        <Line />
        <Control>
          <Button onClick={handleIndexFarm}>Next</Button>
        </Control>
      </InfoCard>
    </Wrapper>
  );
};

export default FarmFirstContainer;

const Wrapper = styled.section`
  width: 45vw;
  display: block;
  margin: 3rem 0 6rem 7.5vw;
  padding-bottom: 3rem;
`;

const Header = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: var(--main-color);
  padding: 0;
  margin: 0;
  margin-bottom: 2rem;
`;

const InfoCard = styled.article`
  width: 100%;
  min-height: 40vh;
  display: block;
  background: var(--third-color);
  border-radius: 5px;
  box-shadow: 0px 0px 12px rgba(128, 255, 219, 0.36);
`;

const InfoHeader = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--main-color);
  padding: 0;
  padding-left: 2rem;
  padding-top: 1rem;
  margin: 2rem 0;
`;

const InputContainer = styled.div`
  width: calc(100% - 4rem);
  margin: 0.5rem auto 2rem;
  display: block;
  text-align: right;
  &:last-of-type {
    padding-top: 0.5rem;
    margin: 0.5rem auto 0;
  }
`;

const Balance = styled.h3`
  font-size: 16px;
  color: var(--fourth-color);
  padding: 0;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Content = styled.div`
  width: 100%;
  height: 41px;
  border: 1px solid rgba(84, 110, 122, 0.25);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1.2fr 3fr 1fr;
  grid-template-rows: 1fr;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 0.5rem 0 1rem;
`;

const Coin = styled.h4`
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  padding: 0;
  color: var(--fourth-color);
`;

const Number = styled.input`
  color: var(--white);
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
`;

const Max = styled.h3`
  color: var(--main-color);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
  margin-right: 1rem;
`;

const FlexContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  h3 {
    padding: 0;
    margin: 0;
    font-size: 16px;
    color: var(--white);
    font-weight: 400;
    &:last-of-type {
      color: var(--fourth-color);
      font-weight: 700;
    }
  }
`;

const Line = styled.div`
  width: calc(100% - 2rem);
  height: 1px;
  background: #72828a25;
  margin: -1rem auto 0.5rem;
`;

const Button = styled.button`
  background: #070a0e;
  border: 1px solid var(--main-color);
  border-radius: 5px;
  box-shadow: 0px 0px 12px rgba(128, 255, 219, 0.36);
  color: var(--main-color);
  padding: 12px 25px;
  cursor: pointer;
`;

const Control = styled.div`
  width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 1rem 0;
  text-align: right;
`;
