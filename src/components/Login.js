import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Login extends Component {

  constructor(props) {
    super(props);
  }

  isLoggedIn(){
    if(this.props.loggedIn){
      return 'registered';
    } else {
      return 'unregistered';
    }
  }

  render() {
    return (
      <div>
          <span> { this.isLoggedIn() } </span>
          <button onClick={() => this.props.login(true)}>
            login
          </button>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default Login;