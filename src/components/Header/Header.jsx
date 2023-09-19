import React from 'react';
import Resume from './Resume';
import Nav from './Nav';
import Logo from './Logo';
import { headerStyle } from '../UI/style/Styles';


const Header = () => {
  return (
    <header className="bg-[#444]" style={headerStyle}>
    <div className="container mx-auto py-4 flex items-center justify-between">
      <Logo />
      <Nav />
      <Resume />
    </div>
  </header>
  );
}

export default Header;
