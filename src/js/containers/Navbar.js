// import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Navbar from '../components/Navbar';
import { withRouter } from 'react-router';

// function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ login } ,dispatch);
// }

function mapStateToProps(state) {
    return {
        cartItems: state.cartItems.reduce((acc, cur) => {
            return acc + cur.amount;
        }, 0)
    };
}

export default withRouter(connect(mapStateToProps, null)(Navbar));