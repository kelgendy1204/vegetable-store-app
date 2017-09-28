import React, { Component } from 'react';
import CartItem from '../containers/CartItem';
import PropTypes from 'prop-types';

class Home extends Component {

    constructor(props){
        super(props);
        this.openCart = this.openCart.bind(this);
    }

    openCart(e) {
        let cartItem = e.currentTarget;
        cartItem.classList.add('open');
    }

    // <div className="tools">
    //     <a href="#"><i className="swap_vert material-icons">swap_vert</i></a>
    //     <a href="#"><i className="apps material-icons">apps</i></a>
    //     <a href="#"><i className="menu material-icons">menu</i></a>
    // </div>

    render() {
        const cartItems = this.props.cartItems.map((elem, index) =>
            <CartItem openCart={this.openCart} data={ elem } key={ index } history={this.props.history} />
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