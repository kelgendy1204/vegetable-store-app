import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import login from '../actions/index';
import Login from '../components/Login';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login } ,dispatch);
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);