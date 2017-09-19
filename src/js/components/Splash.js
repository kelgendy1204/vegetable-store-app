import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Splash extends Component {

    componentWillMount(){
        this.checkLogginState();
    }

    checkLogginState(){
        if(this.props.loggedIn) {
          this.props.history.push('/InnerPage');
        } else {
          this.props.history.push('/Login');
        }
    }

    render() {
        return (
          <div>
              splash
          </div>
        );
    }
}


Splash.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    history: PropTypes.object,
};

export default Splash;