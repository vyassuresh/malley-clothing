import React from 'react';
import FormInput from '../form-input/form-input';

import './sign-in.scss';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="signin">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            handleChange={this.handleChange}
            placeholder="Email address"
            required
          />
          <FormInput
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <button type="submit" className="btn btn--fill btn--full-w">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
