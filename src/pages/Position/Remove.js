import React from 'react';
import RemoveFirstContainer from '../../components/RemovePosition/RemoveFirstContainer.tsx';
import RemoveLastContainer from '../../components/RemovePosition/RemoveLastContainer.tsx';
import RemoveSecondContainer from '../../components/RemovePosition/RemoveSecondContainer.tsx';
import RemoveThirdContainer from '../../components/RemovePosition/RemoveThirdContainer.tsx';
import { useGlobalContext } from '../../context/context';
import styled from 'styled-components';

const Remove = () => {
  const { removeIndex } = useGlobalContext();
  if (removeIndex === 0) {
    return (
      <>
        <Header>REMOVE LIQUITY</Header>
        <RemoveFirstContainer />
      </>
    );
  } else if (removeIndex === 1) {
    return (
      <>
        <Header>REMOVE LIQUITY</Header>
        <RemoveSecondContainer />
      </>
    );
  } else if (removeIndex === 2) {
    return (
      <>
        <Header>REMOVE LIQUITY</Header>
        <RemoveThirdContainer />
      </>
    );
  } else {
    return (
      <>
        <Header>REMOVE LIQUITY</Header>
        <RemoveLastContainer />
      </>
    );
  }
};

export default Remove;

const Header = styled.h1`
  font-size: 36px;
  color: var(--main-color);
  font-weight: 700;
  margin-left: 7.5vw;
  margin-top: 4rem;
  margin-bottom: 3rem;
`;
