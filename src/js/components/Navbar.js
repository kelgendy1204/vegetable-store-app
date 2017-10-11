import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavItem from '../containers/NavItem';

class Navbar extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        $('.button-collapse').sideNav({
            menuWidth: 300,
            closeonClick: true,
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

    goToLogin(){
        let currPathName = this.props.history.location.pathname;
        $('.button-collapse').sideNav('hide');
        if( currPathName != '/InnerPage/Login' ){
            this.props.history.push('/InnerPage/Login');
        }
    }

    goToRegister(){
        let currPathName = this.props.history.location.pathname;
        $('.button-collapse').sideNav('hide');
        if( currPathName != '/InnerPage/Register' ){
            this.props.history.push('/InnerPage/Register');
        }
    }

    render() {
        let currPathName = this.props.history.location.pathname;

        let discountItemData = {
            id: 0,
            position: 0,
            name: 'تخفيضات لهلوبة',
            image: 'assets/images/menu1.svg'
        };

        let NavItems = [ ( <NavItem data={discountItemData} key={-1} history={ this.props.history } /> ) , ...this.props.navItems.map((elem, index) => {
            return <NavItem data={elem} key={index} history={ this.props.history } />;
        }) ];

        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">

                        <ul className="left">
                            <li className="cart">
                                <span className="badge">{ this.props.cartItems }</span>
                                <a href="#" className="left" onClick={ () => this.goToShopCart() }>
                                    <img src="./assets/images/1.svg" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="left">
                                    <i className="search material-icons">search</i>
                                </a>
                            </li>
                        </ul>

                        <ul className="right nav-right">
                            <li className={(currPathName == '/InnerPage/Home' || currPathName == '/InnerPage') ? 'hide' : '' } >
                                <a href="#" onClick={ () => this.goBack() }>
                                    <i className="material-icons back">reply</i>
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
                                <button onClick={ () => this.goToLogin() }>تسجيل الدخول</button>
                                <p className="buton">/</p>
                                <button onClick={ () => this.goToRegister() }>التسجيل</button>
                            </div>
                            { NavItems }
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }

}

Navbar.propTypes = {
    history: PropTypes.object.isRequired,
    cartItems: PropTypes.number.isRequired,
    navItems: PropTypes.array.isRequired
};

export default Navbar;