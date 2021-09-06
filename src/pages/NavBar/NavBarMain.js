import React from 'react';
import { navData } from '../../Data/NavigationData';
import { useGlobalContext } from '../../context/context';
import Image from '../../images/logo.png';
import {
  NavWrapper,
  Wrapper,
  Logo,
  LogoImage,
  LogoLink,
  MenuBars,
  NavMenu,
  NavMenuLinks,
  Button,
} from './NavBarStyles';

const NavbarMain = ( page:any ) => {
  const  toggleNav  = useGlobalContext();
  return (
    <NavWrapper>
      <Wrapper>
        <Logo>
          <LogoImage src={Image} alt='Logo Image' />
          <LogoLink to='/'>DAHLIA</LogoLink>
        </Logo>
        <MenuBars onClick={toggleNav} />
        <NavMenu>
          {navData.map((item, index) => {
            return (
              <NavMenuLinks
                to={item.link}
                key={index}
                className={page === item.title ? 'active' : null}
              >
                {item.icons}
                {item.title}
              </NavMenuLinks>
            );
          })}
        </NavMenu>
        <Button href='#' target='_blank'>
          Connect Wallet
        </Button>
      </Wrapper>
    </NavWrapper>
  );
};

export default NavbarMain;
