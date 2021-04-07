import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import './account-menu.scss';

const AccountMenu = () => (
  <ul className="account-menu">
    <li className="account-menu__item">My account</li>
    <li className="account-menu__item" onClick={() => auth.signOut()}>
      Logout
    </li>
  </ul>
);

export default AccountMenu;
