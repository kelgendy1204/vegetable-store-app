import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from '../components/Navbar';

// function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ login } ,dispatch);
// }

function mapStateToProps(state, ownProps) {
    return {
        shopCarts: state.shopCarts.length
    };
}

export default connect(mapStateToProps, null)(Navbar);