import React from 'react';
import SignIn from '../sign-in/sign-in';
import SignUp from '../sign-up/sign-up';
import CustomButton from '../custom-button/custom-button';

import { ReactComponent as GoogleIcon } from '../../assets/google.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import './login-and-registration.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class AccountPage extends React.Component {
  constructor() {
    super();

    this.state = {
      switchToRegistration: false,
    };
  }

  handleSwitch = () => {
    this.setState(prevState => ({ switchToRegistration: !prevState.switchToRegistration }));
  };
  render() {
    return (
      <div className="account-page">
        <div className="account-page__img">
          <h3 className="HeadingThree HeadingThree--button">Discover Fashion!</h3>
        </div>
        <div className="account-page__content">
          <h2 className="HeadingTwo HeadingTwo--small form-switcher">
            <span
              onClick={this.handleSwitch}
              className={this.state.switchToRegistration ? null : 'dark'}
            >
              Login
            </span>{' '}
            &middot;{' '}
            <span
              onClick={this.handleSwitch}
              className={this.state.switchToRegistration ? 'dark' : null}
            >
              Registration
            </span>
          </h2>
          <div className="social-login">
            <CustomButton extraClass="social-login__btn btn--small" onClick={signInWithGoogle}>
              <GoogleIcon className="social-login__icon" /> Google
            </CustomButton>
            <CustomButton extraClass="social-login__btn btn--small">
              <FacebookIcon className="social-login__icon" /> Facebook
            </CustomButton>
          </div>
          {this.state.switchToRegistration ? <SignUp /> : <SignIn />}
        </div>
      </div>
    );
  }
}

export default AccountPage;
