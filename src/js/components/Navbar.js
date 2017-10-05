import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        $('.button-collapse').sideNav({
            menuWidth: 300,
            closeonTouchEnd: true,
            edge: 'right',
        });
    }

    goBack(){
        let nxtPathName = this.props.history.entries[this.props.history.index - 1].pathname;
        if( !(nxtPathName == '/Splash' || nxtPathName == '/InnerPage') ){
            this.props.history.goBack();
        }
    }

    goToShopCart(){
        let currPathName = this.props.history.location.pathname;
        if( currPathName != '/InnerPage/ShopCart' ){
            this.props.history.push('/InnerPage/ShopCart');
        }
    }

    render() {
        let currPathName = this.props.history.location.pathname;
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">

                        <ul className="left">
                            <li className="cart">
                                <span className="badge">{ this.props.cartItems }</span>
                                <a href="#!" className="left" onTouchEnd={ () => this.goToShopCart() }>
                                    <img src="./assets/images/1.svg" />
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="left">
                                    <i className="search material-icons">search</i>
                                </a>
                            </li>
                        </ul>

                        <ul className="right nav-right">
                            <li className={(currPathName == '/InnerPage/Home' || currPathName == '/InnerPage') ? 'hide' : '' } >
                                <a href="#">
                                    <i className="material-icons back" onTouchEnd={ () => this.goBack() }>reply</i>
                                </a>
                            </li>

                            <li>
                                <a href="#" data-activates="mobile-demo" className="button-collapse">
                                    <i className="material-icons">menu</i>
                                </a>
                            </li>

                        </ul>

                        <ul className="side-nav" id="mobile-demo">
                            <div className="header-data">
                                <div className="circl">
                                    <img src="./assets/images/menu1.svg" />
                                </div>
                                <p>
                                    <span>قائمة</span>
                                    <span>لهلوبة</span>
                                </p>
                            </div>
                            <div className="menu-data first-data">
                                <p>
                                    <span>تخفيضات</span>
                                    <span>لهلوبة</span>
                                </p>
                                <img src="./assets/images/menu1.svg" />
                            </div>
                            <div className="menu-data sc-data">
                                <p>
                                    <span>فواكة</span>
                                    <span>لهلوبة</span>
                                </p>
                                <img src="./assets/images/menu2.svg" />
                            </div>
                            <div className="menu-data thr-data">
                                <p>
                                    <span>خضروات</span>
                                    <span>لهلوبة</span>
                                </p>
                                <img src="./assets/images/menu3.svg" />
                            </div>
                            <div className="menu-data for-data">
                                <p>
                                    <span>خضروات</span>
                                    <span>مجهزة</span>
                                </p>
                                <img src="./assets/images/menu4.svg" />
                            </div>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }

}

Navbar.propTypes = {
    history: PropTypes.object.isRequired,
    cartItems: PropTypes.number.isRequired
};

export default Navbar;