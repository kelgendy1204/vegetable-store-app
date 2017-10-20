import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavItem from '../containers/NavItem';
// import { Throttle } from 'react-throttle';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.search_items = this.search_items.bind(this);
        this.goToContact = this.goToContact.bind(this);
        this.goToHelp = this.goToHelp.bind(this);
        this.goToProfile = this.goToProfile.bind(this);
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
        this.goToPage('Login');
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

    goToProfile(){
        this.goToPage('Profile');
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

                        <ul className="left upper-left">

                            <li>
                                <form>
                                    <div className="input-field">
                                        <input id="search" type="search" required onChange={ this.search_items } />
                                        <label className="label-icon" htmlFor="search">
                                            <i className="material-icons">search</i>
                                        </label>
                                        <i className="material-icons" onClick={() => { this.props.filterBy(null); document.querySelector('#search').value = ''; } }>close</i>
                                    </div>
                                </form>
                            </li>

                            <li className="cart">
                                <span className="badge">{ this.props.cartItems }</span>
                                <a href="#" className="left" onClick={ () => this.goToShopCart() }>
                                    <img src="./assets/images/1.svg" />
                                </a>
                            </li>

                        </ul>

                        <ul className="right nav-right upper-right">

                            <li>
                                <a href="#" data-activates="mobile-demo" className="button-collapse">
                                    <i className="material-icons">menu</i>
                                </a>
                            </li>

                            <li className={(currPathName == '/InnerPage/Home' || currPathName == '/InnerPage') ? 'hide' : '' } >
                                <a href="#" onClick={ () => this.goBack() }>
                                    <i className="material-icons back">reply</i>
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

                            <li className="items contact-us" onClick={this.goToContact}>
                                <p> اتصل بنا  </p>
                                <img src="./assets/images/2.svg"/>
                            </li>

                            <li className="items help" onClick={this.goToHelp}>
                                <p> المساعدة </p>
                                <img src="./assets/images/2.svg"/>
                            </li>

                            <li className="items profile" onClick={this.goToProfile}>
                                <p> حسابي  </p>
                                <img src="./assets/images/2.svg"/>
                            </li>

                            <li className="items favorite">
                                <p> المفضل لك  </p>
                                <img src="./assets/images/2.svg"/>
                            </li>

                            <li className="items news">
                                <p> اخر العروض </p>
                                <img src="./assets/images/2.svg"/>
                            </li>

                            <li className="items news">
                                <p> تتبع الطلبات  </p>
                                <img src="./assets/images/2.svg"/>
                            </li>

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