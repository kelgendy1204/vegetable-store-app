import React, { Component } from 'react';
import Login from './Login';
import Register1 from './Register1';
import Register2 from './Register2';
import Contact from './Contact';
import Profile from './Profile';
import Tlpati from './Tlpati';
import DryClean from './DryClean';
import DryCleanSubject from './DryCleanSubject';
import Fruits from './Fruits';
import FruitSubject from './FruitSubject';
import SuperMarkting from './SuperMarkting';
import SuperMarktingSubject from './SuperMarktingSubject';
import Rust from './Rust';
import RustSubject from './RustSubject';
import LoginRigister from './LoginRigister';
import Help from './Help';
import Navbar from '../containers/Navbar';
import ItemDetail from '../containers/ItemDetail';
import Home from '../containers/Home';
import ShopCart from '../containers/ShopCart';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

                <TransitionGroup
                    component="div"
                    className="inner-pages-holder">
                    <CSSTransition
                        key={this.props.history.location.key}
                        classNames="react-translate"
                        timeout={{ enter: 500, exit: 500 }}>
                        <div className="inner-pages-wrapper">
                            <Switch location={this.props.history.location}>
                                <Route path="/InnerPage/Home" component={ Home }/>
                                <Route path="/InnerPage/ShopCart" component={ ShopCart }/>
                                <Route path="/InnerPage/Login" component={ Login }/>
                                <Route path="/InnerPage/Register1" component={ Register1 }/>
                                <Route path="/InnerPage/Register2" component={ Register2 }/>
                                <Route path="/InnerPage/Contact" component={ Contact }/>
                                <Route path="/InnerPage/Help" component={ Help }/>
                                <Route path="/InnerPage/Profile" component={ Profile }/>
                                <Route path="/InnerPage/ItemDetail/:id" component={ ItemDetail }/>
                                <Route path="/InnerPage/DryClean" component={ DryClean }/>
                                <Route path="/InnerPage/DryCleanSubject" component={ DryCleanSubject }/>
                                <Route path="/InnerPage/Fruits" component={ Fruits }/>
                                <Route path="/InnerPage/FruitSubject" component={ FruitSubject }/>
                                <Route path="/InnerPage/SuperMarkting" component={ SuperMarkting }/>
                                <Route path="/InnerPage/SuperMarktingSubject" component={ SuperMarktingSubject }/>
                                <Route path="/InnerPage/Rust" component={ Rust }/>
                                <Route path="/InnerPage/RustSubject" component={ RustSubject }/>
                                <Route path="/InnerPage/LoginRigister" component={ LoginRigister }/>
                                <Route path="/InnerPage/Tlpati" component={ Tlpati }/>
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

InnerPage.propTypes = {
    history: PropTypes.object.isRequired,
};

export default InnerPage;
