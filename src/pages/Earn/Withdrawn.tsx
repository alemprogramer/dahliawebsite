import React, { useState } from 'react';
import styled from 'styled-components';
import ImageCelo from '../../images/eth.png';
import Background from '../../images/logo.png';

const Withdrawn = () => {
  const [number, setNumber] = useState(0.07);
  return (
    <Wrapper>
      <Header>WITHDRAWN</Header>
      <InfoCard>
        <InfoHeader>Withdraw tokens</InfoHeader>
        <InputContainer>
          <div className='flex'>
            <Desc>I’d like to withdraw</Desc>
            <Balance>Balance 0.000000</Balance>
          </div>
          <Content>
            <div className='flex'>
              <Image src={ImageCelo} alt='celo' />
              <p>ibETH</p>
            </div>
            <Number
              value={number}
              onChange={(e: React.FormEvent<HTMLInputElement>) => setNumber((e.target as any).value)}
            ></Number>
            <Max>MAX</Max>
          </Content>
          <Line />
          <Description>You will recieve ETH balance</Description>
          <FlexImage>
            <img src={Background} alt='background' />
          </FlexImage>
          <FlexContainer>
            <Button>CONFIRM</Button>
          </FlexContainer>
        </InputContainer>
      </InfoCard>
    </Wrapper>
  );
};

export default Withdrawn;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

const Button = styled.button`
  width: 268px;
  height: 58px;
  background: #1c2127;
  border: 1px solid #80ffdb;
  box-shadow: 0px 0px 12px rgba(128, 255, 219, 0.36);
  border-radius: 5px;
  font-weight: 600;
  font-size: 22px;
  color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlexImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  img {
    width: 174px;
    height: auto;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #72828a;
  font-weight: 400;
  padding: 0;
  margin: 1.5rem 0 0.5rem;
  text-align: left;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  /* background: #72828a25; wrong code*/
  margin: 1rem auto 0.5rem;
`;

const Image = styled.img`
  width: 30px;
  height: auto;
  padding-bottom: 0;
`;

const Number = styled.input`
  color: var(--white);
  font-size: 18px;
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
  font-weight: 600;
  font-size: 14px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 35px;
  color: var(--main-color);
  background: #1c2127;
  border: 1px solid #80ffdb;
  box-shadow: 0px 0px 12px rgba(128, 255, 219, 0.36);
  border-radius: 5px;
`;

const InputContainer = styled.div`
  width: calc(100% - 4rem);
  margin: 0.5rem auto 2rem;
  display: block;
  text-align: right;
  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 18px;
      color: var(--white);
    }
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
  height: 50px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;
  .flex {
    display: flex;
    align-items: center;
    justify-content: start;
    img {
      margin-right: 0.5rem;
    }
  }
`;

const Desc = styled.h2`
  font-size: 18px;
  color: var(--white);
  font-weight: 400;
`;

const Wrapper = styled.section`
  width: 45vw;
  min-height: 57vh;
  display: block;
  margin: 3rem auto 6rem;
`;

const Header = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: var(--main-color);
  padding: 0;
  margin: 0;
  margin-bottom: 2rem;
  text-align: center;
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
