import React from 'react';
import { useHistory } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const history = useHistory();

  return (
    <div className="header">
      <p className="logo-app">SHARMASI Blog</p>
      <p className="menu-item" onClick={() => history.push('/login')}>
        logout
      </p>
    </div>
  );
};

export default Header;
