import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';

// function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ login } ,dispatch);
// }

function getCartItems(state) {
    if(state.activeCategory){
        return state.cartItems.filter((elem) => {
            return elem.category_id == state.activeCategory;
        }).sort( (a, b) =>  parseFloat(a.price) - parseFloat(b.price) );
    }

    return state.cartItems.filter((elem) => {
        return elem.discount > 0;
    });
}

function mapStateToProps(state) {
  return {
        cartItems: getCartItems(state)
    };
}


export default connect(mapStateToProps, null)(Home);