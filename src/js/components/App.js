import React, { Component } from 'react';
import InnerPage from './InnerPage';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Login from '../containers/Login';
import PropTypes from 'prop-types';

class App extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.checkLogginState();
    }

    checkLogginState(){
        if(this.props.loggedIn) {
            this.props.history.push('/InnerPage');
        } else {
            this.props.history.push('/Login');
        }
    }

    render() {
        return (
            <div className="App">
                <Route path="/InnerPage" component={ InnerPage }/>
                <Route path="/Login" component={ Login }/>
            </div>
        );
    }
}

App.propTypes = {
    loggedIn: PropTypes.bool.isRequired
};

export default App;
