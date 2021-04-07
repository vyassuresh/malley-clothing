import React from 'react';
import { Link } from 'react-router-dom';
import AccountMenu from '../account-menu/account-menu';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false,
    };
  }

  handleHover = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        menuIsOpen: !prevState.menuIsOpen,
      };
    });
  };

  render() {
    return (
      <div className="row">
        <div className="Header">
          <div className="logo-container">
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <nav className="Navigation">
            <div className="Navigation_item">
              <Link to="/">home</Link>
            </div>
            <div className="Navigation_item">
              <Link to="/shop">shop</Link>
            </div>
            <div className="Navigation_item">
              <Link to="/contact">contact</Link>
            </div>
            <div
              className="Navigation_item Navigation_item--icon"
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHover}
            >
              <Link to={this.props.currentUser ? '#' : '/account'}>
                <UserIcon />
                {this.props.currentUser && this.state.menuIsOpen ? <AccountMenu /> : null}
              </Link>
            </div>
            <div className="Navigation_item Navigation_item--icon">
              <Link to="/cart">
                <CartIcon />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
