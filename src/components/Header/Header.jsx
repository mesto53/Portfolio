import React from 'react';
import Resume from './Resume';
import Nav from './Nav';
import Logo from './Logo';
import { headerStyle } from '../UI/style/Styles';


const Header = () => {
  return (
    <div className='w-full h-[80px] bg-[#444] leading-[80px] flex items-center' style={headerStyle}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <Logo/>
          <Nav/>
          <Resume/>
        </div>
      </div>
    </div>

  );
}

export default Header;
