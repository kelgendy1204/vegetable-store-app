import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {

    constructor(props){
        super(props);
        this.gotToDetails = this.gotToDetails.bind(this);
    }


    gotToDetails(){
        this.props.history.push(`/InnerPage/ItemDetail/${this.props.data.id}`);
    }

    render() {
        let actualPrice = this.props.data.price - (this.props.data.price * this.props.data.discount / 100);
        return (
            <div className="item z-depth-3">
                <div className="right-data">
                    <div className={"up-data " + (this.props.data.discount > 0 ? "" : "hide")}>
                        <div className="content">
                            <p>%<span>{ this.props.data.discount }</span></p>
                        </div>
                    </div>
                    <div className="down-data" onTouchStart={ () => this.gotToDetails() } style = {{ backgroundImage: 'url(' + this.props.data.image + ')' }} ></div>
                </div>
                <div className="left-data">
                    <div className="top-data">
                        <div className="center-data">
                            <p className="one"> { this.props.data.name } </p>
                        </div>
                        <div className="centertwo-data">
                            <div className="right-data">
                                <p className="two">
                                    <span>
                                        { actualPrice }
                                    </span>
                                    جنية
                                </p>
                                <p className={"three " + (this.props.data.discount > 0 ? "" : "hide")}> <span> { this.props.data.price } </span> جنيه</p>
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
                            <div className="border1"><button onTouchStart={ (e) => this.props.addCartItem({ id: this.props.data.id, amount: 1}) }>+</button></div>
                            <div className="border2"><p>{this.props.data.amount}</p></div>
                            <div className="border3"><button onTouchStart={ (e) => this.props.removeCartItem({ id: this.props.data.id, amount: 1}) }>-</button></div>
                            <div className="border4">
                                <button  onTouchStart={ (e) => this.props.removeFromShop({ id: this.props.data.id }) }>
                                    <img src="./assets/images/8.svg" />
                                </button>
                            </div>
                        </div>
                    </div>
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