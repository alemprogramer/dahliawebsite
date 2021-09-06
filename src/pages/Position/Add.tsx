import React from 'react';
import { useGlobalContext } from '../../context/context';
import SecondContainer from '../../components/AddPosition/SecondContainer';
import FirstContainer from '../../components/AddPosition/FirstContainer';
import styled from 'styled-components';

const Add = () => {
  const  addIndex  = useGlobalContext();

  if (addIndex === 0) {
    return (
      <>
        <Header>ADD POSITION</Header>
        <FirstContainer />
      </>
    );
  } else {
    return (
      <>
        <Header>ADD POSITION</Header>
        <SecondContainer />
      </>
    );
  }
};

export default Add;

const Header = styled.h1`
  font-size: 36px;
  color: var(--main-color);
  font-weight: 700;
  margin-left: 7.5vw;
  margin-top: 4rem;
  margin-bottom: 3rem;
`;
