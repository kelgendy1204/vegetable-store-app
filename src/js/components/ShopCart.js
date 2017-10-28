import React, { Component } from 'react';
import ShopCartItem from '../containers/ShopCartItem';
import PropTypes from 'prop-types';

class ShopCart extends Component {

    constructor(props){
        super(props);
        this.goToPage = this.goToPage.bind(this);
    }

    goToPage(page) {
        let currPathName = this.props.history.location.pathname;
        if( currPathName != `/InnerPage/${page}` ){
            this.props.history.push(`/InnerPage/${page}`);
        }
    }


    render() {

        const shopCartItems = this.props.cartItems.map((elem, index) =>
            <ShopCartItem data={ elem } key={ index } history={this.props.history} />
        );

        return (
            <div className='shop-cart'>
                <div className="items-cart">
                    { shopCartItems }
                </div>
                <div className="center-align" onClick={() => {this.goToPage('LoginRigister');}}>
                    <button className="finish">انهاء الطلب</button>
                </div>
            </div>
        );

    }
}

ShopCart.propTypes = {
    cartItems: PropTypes.array.isRequired
};

export default ShopCart;