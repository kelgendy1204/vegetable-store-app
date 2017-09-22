import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';

class InnerPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path="/InnerPage/Home" component={ Home }/>
                    <Redirect to="/InnerPage/Home" />
                </Switch>
            </div>
        );
    }
}

export default InnerPage;
