import React from 'react';
import Header from './../Header/Header.jsx';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Header />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Layout;