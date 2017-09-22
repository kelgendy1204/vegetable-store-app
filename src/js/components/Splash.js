import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Splash extends Component {

    componentDidMount(){
        let logo = document.querySelector('img.logo');

        this.prefixedEventListener(logo, 'animationend', () => {
            this.props.history.push('/InnerPage');
        });

    }

    prefixedEventListener(element, type, callback) {
        var pfx = ['webkit', 'moz', 'MS', 'o', ''];
        for (var p = 0; p < pfx.length; p++) {
            if (!pfx[p]) type = type.toLowerCase();
            element.addEventListener(pfx[p]+type, callback, false);
        }
    }

    // checkLogginState(){
    //     if(this.props.loggedIn) {
    //         this.props.history.push('/InnerPage');
    //     } else {
    //         this.props.history.push('/Login');
    //     }
    // }

    render() {
        return (
          <div className="splash">
              <div className="patternsplash">
                  <img className="pattern" src="assets/images/pattern.svg" />
                  <img className="logo" src="assets/images/logo.svg" />
              </div>
          </div>
        );
    }
}


Splash.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    history: PropTypes.object,
};

export default Splash;