import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.scss';

const Header = () => (
  <div className="row">
    <div className="Header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <nav className="Navigation">
        <Link className="Navigation_item" to="/">
          home
        </Link>
        <Link className="Navigation_item" to="/shop">
          shop
        </Link>
        <Link className="Navigation_item" to="/contact">
          contact
        </Link>
        <Link className="Navigation_item" to="/contact">
          sign in
        </Link>
      </nav>
    </div>
  </div>
);

export default Header;
