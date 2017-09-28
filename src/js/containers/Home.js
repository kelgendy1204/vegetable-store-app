import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';

// function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ login } ,dispatch);
// }

function mapStateToProps(state) {
  return {
        cartItems: state.cartItems.sort( (a, b) =>  parseFloat(a.price) - parseFloat(b.price) )
    };
}


export default connect(mapStateToProps, null)(Home);