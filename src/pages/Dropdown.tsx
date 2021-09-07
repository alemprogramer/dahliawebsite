import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { navData } from '../Data/NavigationData';
import { useGlobalContext } from '../context/context';

const Dropdown = () => {
  const { toggleNav, toggle } = useGlobalContext();
  const openProps={
    isOpen: toggle
  }
  return (
    <DropdownContainer isOpen={openProps.isOpen } onClick={toggleNav}>
      <CloseBtn onClick={toggleNav}>
        <CloseIcon />
      </CloseBtn>
      
      <div>
        <DropdownMenu>
          {navData.map((item, index) => {
            return (
              <DropdownLink to={item.link} key={index}>
                {item.icons}
                {item.title}
              </DropdownLink>
            );
          })}
        </DropdownMenu>
        <BtnWrapper>
          <Button href='#' target='_blank'>
            Connect Wallet
          </Button>
        </BtnWrapper>
      </div>
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: var(--third-color);
  display: grid;
  align-items: center;
  top: ${({ isOpen }: { isOpen: string }) => (isOpen ? '0' : '-100%')};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }: { isOpen: string }) => (isOpen ? '1' : '0')};
`;
const CloseBtn = styled.div`
  position: absolute;
  top: 57.5px;
  right: 10vw;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  transform: translate(50%, -50%);
`;

const CloseIcon = styled(FaTimes)`
  color: var(--main-color);
`;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
`;
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  svg {
    margin-right: 0.5rem;
    width: 1.5rem;
    height: auto;
    font-size: 2rem;
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.a`
  border-radius: 5px;
  background: var(--third-color);
  padding: 12px 25px;
  border: 1px solid var(--main-color);
  box-shadow: 0px 0px 12px rgba(128, 255, 219, 0.36);
  text-decoration: none;
  color: var(--main-color);
  font-size: 14px;
`;
