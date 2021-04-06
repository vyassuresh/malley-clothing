import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';
import './header.scss';

const Header = () => (
  <div className="row">
    <div className="Header">
      <div className="logo-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
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
        <Link className="Navigation_item Navigation_item--icon" to="/account">
          <UserIcon />
        </Link>
        <Link className="Navigation_item Navigation_item--icon" to="/cart">
          <CartIcon />
        </Link>
      </nav>
    </div>
  </div>
);

export default Header;
