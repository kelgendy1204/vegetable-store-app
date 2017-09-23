import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {

    constructor(props){
        super(props);
        // this.openCart = this.openCart.bind(this);
    }

    render() {
        return (
            <div className="item">
                <div className="right-data">
                    <div className="up-data">
                        <div className="content">
                            <p>%<span>10</span></p>
                        </div>
                    </div>
                    <div className="down-data"></div>
                </div>
                <div className="left-data">
                    <div className="top-data">
                        <div className="center-data">
                            <p className="one">كيلو طماطم بلدي</p>
                        </div>
                        <div className="centertwo-data">
                            <div className="right-data">
                                <p className="two">35  جنية</p>
                                <p className="three">49 جنيه</p>
                            </div>
                            <div className="lef-data">
                                <a className="hart"></a>
                                <a className="share"></a>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-data" onTouchStart={ (e) => this.props.openCart(e) }>
                        <div className="content closed">
                            <img src="./assets/images/1.svg" />
                            <p>اضف الي السلة</p>
                        </div>
                        <div className="content opened">
                            <div className="border1"><p>+</p></div>
                            <div className="border2"><p>1</p></div>
                            <div className="border3"><p>-</p></div>
                            <div className="border4">
                                <img src="./assets/images/8.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

CartItem.propTypes = {
    openCart: PropTypes.func.isRequired
};

export default CartItem;