import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ShopCartItem from '../components/ShopCartItem';
import * as cartItemsActions from '../actions/action_cartItems';

function mapDispatchToProps(dispatch) {
  return bindActionCreators( cartItemsActions ,dispatch);
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCartItem);