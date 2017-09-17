import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, null)(App);