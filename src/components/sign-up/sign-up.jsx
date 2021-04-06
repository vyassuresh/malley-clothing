import React from 'react';
import FormInput from '../form-input/form-input';

import './sign-up.scss';

class SignUp extends React.Component {
  render() {
    return (
      <div className="signup">
        <form>
          <FormInput type="text" name="name" placeholder="Full name" required />
          <FormInput type="text" name="username" placeholder="Username" required />
          <FormInput type="email" name="email" placeholder="Email address" required />
          <FormInput type="password" name="password" placeholder="Password" required />
          <button type="submit" className="btn btn--fill btn--full-w">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
