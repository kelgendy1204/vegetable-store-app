import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        $('.button-collapse').sideNav(
            {
                menuWidth: 300,
                closeOnClick: true,
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
        this.props.history.push('/InnerPage/ShopCart');
    }

    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">

                        <ul className="left">
                            <li>
                                <a href="#!" className="left">
                                    <i className="search material-icons">search</i>
                                </a>
                            </li>
                            <li className="cart">
                                <span className="badge">{ this.props.shopCarts }</span>
                                <a href="#!" className="left" onTouchStart={ () => this.goToShopCart() }>
                                    <img src="./assets/images/1.svg" />
                                </a>
                            </li>
                        </ul>

                        <ul className="right nav-right">
                            <li>
                                <a href="#">
                                    <i className="material-icons back" onTouchStart={ () => this.goBack() }>reply</i>
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
                                <p>  قائمة لهلوبة  </p>
                            </div>
                            <div className="menu-data first-data">
                                <p> تخفيضات لهلوبة </p>
                                <img src="./assets/images/menu1.svg" />
                            </div>
                            <div className="menu-data sc-data">
                                <p> فواكة لهلوبة </p>
                                <img src="./assets/images/menu2.svg" />
                            </div>
                            <div className="menu-data thr-data">
                                <p> خضروات لهلوبة </p>
                                <img src="./assets/images/menu3.svg" />
                            </div>
                            <div className="menu-data for-data">
                                <p> خضروات مجهزة </p>
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
    shopCarts: PropTypes.number.isRequired
};

export default Navbar;