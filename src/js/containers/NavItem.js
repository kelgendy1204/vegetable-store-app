import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavItem from '../components/NavItem';
import { changeActiveCategory } from '../actions/action_categories';

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { changeActiveCategory } ,dispatch);
}

export default connect(null, mapDispatchToProps)(NavItem);