import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from '../containers/Home';
import { Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';
import PropTypes from 'prop-types';
// import CSSTransitionGroup from 'react-addons-css-transition-group';

class InnerPage extends Component {

    constructor(props){
        super(props);
    }

// <CSSTransitionGroup
//     transitionName="fade"
//     transitionEnterTimeout={5000}
//     transitionLeaveTimeout={5000} >
// </CSSTransitionGroup>

    render() {
        return (
            <div>
                <Navbar history={this.props.history} />
                <Switch>
                    <Route path="/InnerPage/Home" component={ Home }/>
                    <Redirect to="/InnerPage/Home" />
                </Switch>
            </div>
        );
    }

}


InnerPage.propTypes = {
    history: PropTypes.object.isRequired,
};

export default InnerPage;
