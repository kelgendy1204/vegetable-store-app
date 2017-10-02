import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from '../components/Navbar';

// function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ login } ,dispatch);
// }

function mapStateToProps(state, ownProps) {
    return {
        cartItems: state.cartItems.reduce((acc, cur) => {
            return acc + cur.amount;
        }, 0)
    };
}

export default connect(mapStateToProps, null)(Navbar);