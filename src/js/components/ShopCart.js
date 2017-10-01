import React, { Component } from 'react';
import ShopCartItem from '../containers/ShopCartItem';
// import PropTypes from 'prop-types';

class ShopCart extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className='shop-cart'>
                <div className="items-cart">
                    <ShopCartItem/>
                    <ShopCartItem/>
                    <ShopCartItem/>
                    <ShopCartItem/>
                </div>
            </div>
        );

    }
}

// ShopCart.propTypes = {
//     cartItem: PropTypes.object.isRequired,
// };

export default ShopCart;