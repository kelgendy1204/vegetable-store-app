import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ItemDetail from '../components/ItemDetail';

// function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ login } ,dispatch);
// }

function mapStateToProps(state, ownProps) {
    return {
        cartItem: state.cartItems.find(function (element) {
            return element.id == ownProps.match.params.id;
        })
    };
}

export default connect(mapStateToProps, null)(ItemDetail);