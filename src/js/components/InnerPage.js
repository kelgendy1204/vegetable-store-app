import React, { Component } from 'react';
import Navbar from '../containers/Navbar';
import ItemDetail from '../containers/ItemDetail';
import Home from '../containers/Home';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class InnerPage extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.history.push('/InnerPage/Home');
    }

    render() {
        return (
            <div className="innerpage">
                <Navbar history={this.props.history} />
                <CSSTransitionGroup
                  component="div"
                  className="inner-pages-holder"
                  transitionName="reactTranslate"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}>
                    <Switch key={this.props.history.location.pathname} location={this.props.history.location}>
                        <Route path="/InnerPage/Home" component={ Home }/>
                        <Route path="/InnerPage/ItemDetail/:id" component={ ItemDetail }/>
                    </Switch>
                </CSSTransitionGroup>
            </div>
        );
    }
}

InnerPage.propTypes = {
    history: PropTypes.object.isRequired,
};

export default InnerPage;
