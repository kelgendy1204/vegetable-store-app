import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login(){
        this.props.login(true);
        this.props.history.push('/InnerPage');
    }

    render() {
        return (
          <div>
              <button onClick={ this.login }>
                login
              </button>
          </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool
};

export default Login;