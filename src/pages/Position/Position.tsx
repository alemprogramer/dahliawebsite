import React from 'react';
import styled from 'styled-components';
import { InvestimentHistory, PositionData } from '../../Data/PositionData';
import BackgroundImage from '../../images/background.png';

const Position = () => {
  return (
    <Wrapper>
      <Background src={BackgroundImage} alt='background' />
      <Header>POSITIONS</Header>
      <Desc>Manage your position with ease.</Desc>
      <Button>
        <h3>Portfolio Value</h3>
        <p>$1,320,282</p>
      </Button>
      <InfoContainer>
        <HeaderContainer>
          <h2>Pool</h2>
          <h2 className='center'>Borrow</h2>
          <h2 className='center'>Current Value</h2>
          <h2 className='center'>Debt Ratio</h2>
          <h2 className='center'>Apy</h2>
          <div></div>
        </HeaderContainer>
        {PositionData.map((item, index) => {
          return (
            <Item key={index}>
              <div className='flexFirst'>
                <img src={item.img} alt={item.title} className='image' />
                <h2>{item.title}</h2>
              </div>
              <div className='centerMiddle thin'>{item.borrow}</div>
              <div className='centerMiddle thin'>{item.value}</div>
              <div className='centerMiddle thin'>{item.debt}</div>
              <div className='centerMiddle thin'>{item.apy}</div>
              <div className='end'>
                <button className='small'>ADD</button>
                <button className='large'>REMOVE</button>
                <button className='small'>CLOSE</button>
                <button className='large special'>HARVEST</button>
              </div>
            </Item>
          );
        })}
      </InfoContainer>
      <SecondHeader>Investment History</SecondHeader>
      <InfoContainerSecond>
        <HeaderInvestment>
          <h2>Caller Address</h2>
          <h2 className='center'>Tokens Invested</h2>
          <h2 className='center'>Timestamp</h2>
          <div></div>
        </HeaderInvestment>
        {InvestimentHistory.map((item, index) => {
          return (
            <ItemInvestment key={index}>
              <div className='flexFirst'>
                <img src={item.img} alt='address' className='image' />
                <h2>{item.address}</h2>
              </div>
              <div className='centerMiddle thin'>{item.token}</div>
              <div className='centerMiddle thin'>{item.time}</div>
            </ItemInvestment>
          );
        })}
      </InfoContainerSecond>
    </Wrapper>
  );
};

export default Position;

const Background = styled.img`
  position: fixed;
  bottom: -10%;
  left: 10%;
  width: 80%;
  height: auto;
`;

const ItemInvestment = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 3fr repeat(2, 1fr);
  grid-template-rows: 1fr;
  height: 70px;
  border-bottom: 1px solid #72828a15;
  color: var(--white);
  .image {
    height: 40px;
    margin-right: 0.5rem;
  }
  h2,
  h3 {
    margin: 0;
    padding: 0;
  }
  .flexFirst {
    display: flex;
    align-items: center;
    height: 100%;
    h2 {
      font-size: 12px;
      color: var(--white);
      font-weight: 400;
    }
  }

  .centerMiddle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .thin {
    color: var(--white);
    font-size: 16px;
    font-weight: 400;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const HeaderInvestment = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(2, 1fr);
  grid-template-rows: 1fr;
  height: 55px;
  border-bottom: 1px solid #72828a15;
  margin: 0;
  padding: 0;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  left: 0;
  background: var(--third-color);
  @media screen and (max-width: 1000px) {
    display: none;
  }
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    color: var(--fourth-color);
    margin: 0;
    padding: 0;
  }
`;

const SecondHeader = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: var(--white);
  margin: 4rem 0 2rem;
  padding: 0;
`;

const Item = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(5, 0.95fr) 1.4fr;
  grid-template-rows: 1fr;
  height: 100px;
  border-bottom: 1px solid #72828a15;
  color: var(--white);
  .left {
    margin-left: 1rem;
  }
  .image {
    height: 40px;
    margin-right: 0.5rem;
  }
  h2,
  h3 {
    margin: 0;
    padding: 0;
  }
  .flexFirst {
    display: flex;
    align-items: center;
    height: 100%;
    h2 {
      font-size: 12px;
      color: var(--white);
      font-weight: 400;
    }
  }

  .centerMiddle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .thin {
    color: var(--white);
    font-size: 16px;
    font-weight: 400;
  }
  .end {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin: auto 0;
  }
  button {
    box-shadow: 0px 0px 12px rgba(128, 255, 219, 0.36);
    border-radius: 5px;
    background: var(--main-color);
    color: #000;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    margin-bottom: 0.2rem;
  }
  .small {
    width: 85px;
    height: 30px;
  }
  .large {
    width: 115px;
    height: 30px;
  }
  .special {
    background: #1c2127;
    border: 1px solid var(--main-color);
    color: var(--main-color);
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Wrapper = styled.section`
  width: 70vw;
  min-height: 100vh;
  display: block;
  margin: 3rem auto 10rem;
`;

const Header = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: var(--main-color);
  padding: 0;
  margin: 0;
  margin-bottom: 2rem;
  text-align: center;
`;

const Desc = styled.p`
  font-weight: 400;
  font-size: 22px;
  color: var(--white);
  padding: 0;
  margin: 1rem 0;
  text-align: center;
`;

const Button = styled.button`
  width: 382px;
  min-height: 122px;
  background: #1c2127;
  border: 4px solid var(--main-color);
  box-shadow: 0px 0px 12px rgba(128, 255, 219, 0.36);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: var(--main-color);
  margin: 2rem auto;
  h3 {
    font-weight: 700;
    font-size: 22px;
    padding: 0;
    margin: 0;
  }
  p {
    font-weight: 400;
    font-size: 36px;
    padding: 0;
    margin: 0;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  background: var(--third-color);
  height: 55vh;
  border-radius: 5px;
  box-shadow: 0px 0px 12px rgba(128, 255, 219, 0.36);
  position: relative;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    /* background: #80ffdb15; wrong code*/
  }
  &::-webkit-scrollbar-thumb {
    background: var(--main-color);
    border-radius: 50px;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const InfoContainerSecond = styled.div`
  width: 100%;
  background: var(--third-color);
  height: 40vh;
  border-radius: 5px;
  box-shadow: 0px 0px 12px rgba(128, 255, 219, 0.36);
  position: relative;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    /* background: #80ffdb15; wrong code*/
  }
  &::-webkit-scrollbar-thumb {
    background: var(--main-color);
    border-radius: 50px;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 0.95fr) 1.4fr;
  grid-template-rows: 1fr;
  height: 55px;
  border-bottom: 1px solid #72828a15;
  margin: 0;
  padding: 0;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  left: 0;
  background: var(--third-color);

  @media screen and (max-width: 1000px) {
    display: none;
  }
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    color: var(--fourth-color);
    margin: 0;
    padding: 0;
  }
`;
