import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="item-cart z-depth-3">
                <div className="right-data-cart">
                    <div className="img"></div>
                </div>
                <div className="center-data-cart">
                    <div className="top-data">
                        <div className="center-data">
                            <p className=""> كيلو خيار بلدي </p>
                            <p className="two"> كيلو خيار بلدي </p>
                        </div>
                    </div>
                    <div className="bottom-data">
                        <div className="content">
                            <div className="border1"><p>+</p></div>
                            <div className="border2"><p>1</p></div>
                            <div className="border1"><p>-</p></div>
                        </div>
                    </div>
                </div>
                <div className="left-data-cart">
                    <div className="content-data-left">
                        <div className="content">
                            <img src="./assets/images/1.svg" />
                        </div>
                    </div>
                    <p>اجمالي الصنف</p>
                    <p className="one">105,99</p>
                    <p className="two">جنية</p>
                </div>
            </div>
        );
    }

}

CartItem.propTypes = {
    openCart: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
};

export default CartItem;