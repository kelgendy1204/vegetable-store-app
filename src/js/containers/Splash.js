// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Splash from '../components/Splash';

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, null)(Splash);