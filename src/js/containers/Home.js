// import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Home from '../components/Home';

// function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ login } ,dispatch);
// }

function getCartItems(state) {
    let cartItems;

    if(state.activeCategory){
        cartItems = state.cartItems.filter((elem) => {
            return elem.category_id == state.activeCategory;
        }).sort( (a, b) =>  parseFloat(a.price) - parseFloat(b.price) );
    } else {
        cartItems = state.cartItems.filter((elem) => {
            return elem.discount > 0;
        }).sort( (a, b) =>  parseFloat(a.price) - parseFloat(b.price) );
    }

    if(state.filteredBy){
        cartItems = cartItems.filter((elem) => {
            return elem.name.includes(state.filteredBy);
        }).sort( (a, b) =>  parseFloat(a.price) - parseFloat(b.price) );
    }

    return cartItems;

}

function mapStateToProps(state) {
    return {
        cartItems: getCartItems(state)
    };
}


export default connect(mapStateToProps, null)(Home);