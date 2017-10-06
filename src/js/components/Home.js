import React, { Component } from 'react';
import CartItem from '../containers/CartItem';
import PropTypes from 'prop-types';

class Home extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const cartItems = this.props.cartItems.map((elem, index) =>
            <CartItem data={ elem } key={ index } history={this.props.history} />
        );

        return (
            <div className="home">
                <div className="items">
                    {cartItems}
                </div>
            </div>
        );

    }

}

Home.PropTypes = {
    cartItems: PropTypes.array.isRequired
};

export default Home;