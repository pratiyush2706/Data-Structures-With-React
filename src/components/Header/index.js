import React from 'react';
import style from './header.module.css';

const Header = ({ headerTitle }) => {
  return (
    <div className={style.container}>
      {headerTitle.toUpperCase()}
    </div>
  );
};

export default Header;
