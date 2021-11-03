import React from 'react';
import headerStyles from '../styles/header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.header}>
        NEW HERE? Get 20% off with code: FAC22
      </h1>
    </div>
  );
};

export default Header;
