import React, { Component } from 'react';
import ShopCartItem from '../containers/ShopCartItem';
import PropTypes from 'prop-types';

class ShopCart extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const shopCartItems = this.props.cartItems.map((elem, index) =>
            <ShopCartItem data={ elem } key={ index } />
        );

        return (
            <div className='shop-cart'>
                <div className="items-cart">
                    { shopCartItems }
                </div>
            </div>
        );

    }
}

ShopCart.propTypes = {
    cartItems: PropTypes.array.isRequired
};

export default ShopCart;