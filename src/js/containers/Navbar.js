// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from '../components/Navbar';
import { withRouter } from 'react-router';
import { filterBy, filterByFavorites } from '../actions/action_filterBy';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ filterBy, filterByFavorites } ,dispatch);
}

function mapStateToProps(state) {
    return {
        cartItems: state.cartItems.reduce((acc, cur) => {
            return acc +  (cur.amount ? 1 : 0 );
        }, 0),
        navItems: state.categories,
        filteredBy: state.filteredBy
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));