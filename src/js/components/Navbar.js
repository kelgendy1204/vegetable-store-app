import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import NavItem from '../containers/NavItem';
//import DryClean from './DryClean';
// import { Throttle } from 'react-throttle';

let pages = {
    '/InnerPage/Home' : 'Home',
    '/InnerPage/ShopCart' : 'ShopCart',
    '/InnerPage/LoginRigister' : 'LoginRigister',
    '/InnerPage/Register' : 'Register',
    '/InnerPage/Contact' : 'Contact',
    '/InnerPage/Help' : 'Help',
    '/InnerPage/Tlpati' : 'Tlpati',
    '/InnerPage/Profile' : 'Profile',
    '/InnerPage/DryClean' : 'DryClean',
    '/InnerPage/Fruits' : 'Fruits',
    '/InnerPage/SuperMarkting' : 'SuperMarkting',
    '/InnerPage/Rust' : 'Rust',
    '/InnerPage/Eltlpat' : 'Eltlpat',
    '/InnerPage/LahlopaCorner' : 'LahlopaCorner',
};

class Navbar extends Component {
    constructor(props){
        super(props);
        this.search_items = this.search_items.bind(this);
        this.goToContact = this.goToContact.bind(this);
        this.goToHelp = this.goToHelp.bind(this);
        this.goToProfile = this.goToProfile.bind(this);
        this.goToDryClean = this.goToDryClean.bind(this);
        this.goToFruits = this.goToFruits.bind(this);
        this.goToSuperMarkting = this.goToSuperMarkting.bind(this);
        this.goToRust = this.goToRust.bind(this);
        this.goToTlpati = this.goToTlpati.bind(this);
        this.goToEltlpat = this.goToEltlpat.bind(this);
        this.goToLahlopaCorner = this.goToLahlopaCorner.bind(this);
        this.showFavorites = this.showFavorites.bind(this);

    }

    componentDidMount() {
        $('.button-collapse').sideNav({
            menuWidth: 300,
            closeonClick: true,
            edge: 'right',
        });
    }

    search_items(e) {
        this.props.filterBy(e.target.value);
    }

    showFavorites() {
        let currPathName = this.props.history.location.pathname;
        $('.button-collapse').sideNav('hide');
        if( currPathName != '/InnerPage/Home' ){
            this.props.history.push(`/InnerPage/Home`);
        }
        this.props.filterByFavorites();
    }

    goBack(){
        let nxtPathName = this.props.history.entries[this.props.history.index - 1].pathname;
        if( !(nxtPathName == '/Splash' || nxtPathName == '/InnerPage') ){
            this.props.history.goBack();
        }
    }

    goToPage(page) {
        let currPathName = this.props.history.location.pathname;
        $('.button-collapse').sideNav('hide');
        if( currPathName != `/InnerPage/${page}` ){
            this.props.history.push(`/InnerPage/${page}`);
        }
    }

    goToShopCart(){
        this.goToPage('ShopCart');
    }

    goToLogin(){
        this.goToPage('LoginRigister');
    }

    goToRegister(){
        this.goToPage('Register');
    }

    goToContact(){
        this.goToPage('Contact');
    }

    goToHelp(){
        this.goToPage('Help');
    }

    goToTlpati(){
        this.goToPage('Tlpati');
    }

    goToProfile(){
        this.goToPage('Profile');
    }

    goToDryClean(){
        this.goToPage('DryClean');
    }

    goToFruits(){
        this.goToPage('Fruits');
    }

    goToSuperMarkting(){
        this.goToPage('SuperMarkting');
    }

    goToRust(){
        this.goToPage('Rust');
    }

    goToEltlpat(){
        this.goToPage('Eltlpat');
    }

    goToLahlopaCorner(){
        this.goToPage('LahlopaCorner');
    }

    render() {
        let currPathName = this.props.history.location.pathname;

        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">

                        <ul className="left upper-left">

                            <li>
                                <input id="search" type="search" className="expandable-search" required onChange={ this.search_items } />
                            </li>

                            <li className="cart">
                                <span className="badge">{ this.props.cartItems }</span>
                                <a href="#" className="left" onClick={ () => this.goToShopCart() }>
                                    <img src="./assets/images/1.svg" />
                                </a>
                            </li>

                        </ul>


                        <ul className="right nav-right upper-right">

                            <li className="menu">
                                <a href="#" data-activates="mobile-demo" className="button-collapse">
                                    <i className="material-icons">menu</i>
                                </a>
                            </li>
                            <li className={(currPathName == '/InnerPage/Home' || currPathName == '/InnerPage') ? 'goback hide' : 'goback' } >
                                <a href="#" onClick={ () => this.goBack() }>
                                    <i className="material-icons back">reply</i>
                                </a>
                            </li>
                            <li className='screen-title'>
                                <p>
                                    {pages[currPathName]}
                                </p>
                            </li>

                        </ul>

                        <ul className="side-nav" id="mobile-demo">

                            <div className="header-data">
                                <div className="circl">
                                    <img src="./assets/images/boy.svg" />
                                </div>
                                <button onClick={ () => this.goToLogin() }>تسجيل الدخول</button>
                            </div>

                            <div className="menu-data" onClick={ this.goToFruits } >
                                <p>
                                    فــــــواكــــة وخضــروات
                                </p>
                                <img src='assets/images/iconfinal1.svg' />
                            </div>

                            <div className="menu-data" onClick={ this.goToSuperMarkting} >
                                <p>
                                    ســـوبـــر مــــاركـــت
                                </p>
                                <img src='assets/images/iconfinal2.svg' />
                            </div>

                            <div className="menu-data" onClick={ this.goToRust} >
                                <p>
                                    مـــطـــاعـــم لــهلوبــة
                                </p>
                                <img src='assets/images/iconfinal3.svg' />
                            </div>

                            <div className="menu-data" onClick={ this.goToDryClean } >
                                <p>
                                    خــــدمـــات تــنظــيـف
                                </p>
                                <img src='assets/images/iconfinal4.svg' />
                            </div>
                            <div className="items ">

                                <li className="item tlpati" onClick={this.goToTlpati}>
                                    <img src="./assets/images/iconfinal5.svg"/>
                                    <p> طلباتي </p>
                                </li>

                                <li className="item left-child Eltlpat" onClick={this.goToEltlpat}>
                                    <img src="./assets/images/iconfinal6.svg"/>
                                    <p> تتبع الطلبات </p>
                                </li>

                                <li className="item favorite" onClick={this.showFavorites}>
                                    <img src="./assets/images/iconfinal7.svg"/>
                                    <p> مفضلي  </p>
                                </li>

                                <li className="item left-child LahlopaCorner" onClick={this.goToLahlopaCorner}>
                                    <img src="./assets/images/iconfinal8.svg"/>
                                    <p> ركن لهلوبة </p>
                                </li>

                                <li className="item contact-us" onClick={this.goToContact}>
                                    <img src="./assets/images/iconfinal9.svg"/>
                                    <p> اتصل بنا  </p>
                                </li>

                                <li className="item left-child help" onClick={this.goToHelp}>
                                    <img src="./assets/images/iconfinal10.svg"/>
                                    <p> المساعدة  </p>
                                </li>

                                <li className="item profile" onClick={this.goToProfile}>
                                    <img src="./assets/images/iconfinal11.svg"/>
                                    <p> حسابي  </p>
                                </li>



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
    cartItems: PropTypes.number.isRequired,
    filterBy: PropTypes.func.isRequired,
    navItems: PropTypes.array.isRequired
};

export default Navbar;