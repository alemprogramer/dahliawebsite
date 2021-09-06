import React from 'react';
import { useGlobalContext } from '../../context/context';
import { navHomeData } from '../../Data/NavigationData.tsx';
import Image from '../../images/logo.png';
import {
  NavWrapper,
  Wrapper,
  Logo,
  LogoImage,
  LogoLink,
  MenuBars,
  NavMenu,
  NavMenuLinksA,
} from './NavBarStyles';

const NavBarHome = () => {
  const { toggleNav } = useGlobalContext();
  return (
    <NavWrapper>
      <Wrapper>
        <Logo>
          <LogoImage src={Image} alt='Logo Image' />
          <LogoLink to='/'>DAHLIA</LogoLink>
        </Logo>
        <MenuBars onClick={toggleNav} />
        <NavMenu>
          {navHomeData.map((item, index) => {
            return (
              <NavMenuLinksA href={item.link} key={index}>
                {item.icons}
                {item.title}
              </NavMenuLinksA>
            );
          })}
        </NavMenu>
      </Wrapper>
    </NavWrapper>
  );
};

export default NavBarHome;
