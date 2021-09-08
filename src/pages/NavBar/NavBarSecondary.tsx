/** @jsxImportSource theme-ui */
import React from 'react';
import { useGlobalContext } from '../../context/context';
import Image from '../../images/logo.png';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

const NavBarSecondary = () => {
  const { toggleNav } = useGlobalContext();
  return (
    <nav sx={{ variant: 'cards.navBar.NavWrapper' }}>
      <div sx={{ variant: 'cards.navBar.Wrapper' }}>
        <div sx={{ variant: 'cards.navBar.Logo' }}>
          <img sx={{ variant: 'cards.navBar.Logo.LogoImage' }} src={Image} alt='Logo' />
          <Link sx={{ variant: 'cards.navBar.Logo.LogoLink' }}  to='/'>DAHLIA</Link>
        </div>
        <FaBars sx={{ variant: 'cards.navBar.MenuBars' }} onClick={toggleNav} />
        <a sx={{ variant: 'cards.navBar.Button' }} href='#' target='_blank'>
          Connect Wallet
        </a>
      </div>
    </nav>
  );
};

export default NavBarSecondary;
