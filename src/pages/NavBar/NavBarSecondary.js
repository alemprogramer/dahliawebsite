import React from 'react';
import { useGlobalContext } from '../../context/context';
import Image from '../../images/logo.png';
import {
  NavWrapper,
  Wrapper,
  Logo,
  LogoImage,
  LogoLink,
  MenuBars,
  Button,
} from './NavBarStyles';

const NavBarSecondary = () => {
  const { toggleNav } = useGlobalContext();
  return (
    <NavWrapper>
      <Wrapper>
        <Logo>
          <LogoImage src={Image} alt='Logo Image' />
          <LogoLink to='/'>DAHLIA</LogoLink>
        </Logo>
        <MenuBars onClick={toggleNav} />
        <Button href='#' target='_blank'>
          Connect Wallet
        </Button>
      </Wrapper>
    </NavWrapper>
  );
};

export default NavBarSecondary;
