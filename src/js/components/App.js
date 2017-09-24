import React, { Component } from 'react';
import InnerPage from './InnerPage';
import { Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';
import Splash from '../containers/Splash';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/InnerPage" component={ InnerPage } />
                    <Route path="/Splash" component={ Splash } />
                    <Redirect to='/Splash' />
                </Switch>
            </div>
        );
    }
}

export default App;
