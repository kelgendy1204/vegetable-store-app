import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShopCartItem extends Component {

    constructor(props){
        super(props);
    }

    gotToDetails(){
        this.props.history.push(`/InnerPage/ItemDetail/${this.props.data.id}`);
    }

    render() {

        let actualPrice = ( this.props.data.price - (this.props.data.price * this.props.data.discount / 100) ) * this.props.data.amount;

        return (
            <div className="item-cart z-depth-3">
                <div className="right-data-cart">
                    <div className="img" style = {{ backgroundImage: 'url(' + this.props.data.image + ')' }} onClick={ () => this.gotToDetails() }></div>
                </div>
                <div className="center-data-cart">
                    <div className="top-data">
                        <div className="center-data">
                            <p>{this.props.data.name}</p>
                        </div>
                    </div>
                    <div className="bottom-data">
                        <div className="content">
                            <div className="border1"><button onClick={ () => this.props.addCartItem({ ...this.props.data }) } >+</button></div>
                            <div className="border2"><p>{this.props.data.amount}</p></div>
                            <div className="border1"><button onClick={ () => this.props.removeCartItem({ ...this.props.data }) } >-</button></div>
                        </div>
                    </div>
                </div>
                <div className="left-data-cart">
                    <div className="content-data-left" onClick={ () => this.props.removeFromShop({ id: this.props.data.id }) } >
                        <div className="content">
                            <img src="./assets/images/1.svg" />
                        </div>
                    </div>
                    <p>اجمالي الصنف</p>
                    <p className="one">{ actualPrice }</p>
                    <p className="two">جنية</p>
                </div>
            </div>
        );
    }

}

ShopCartItem.propTypes = {
    data: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    addCartItem: PropTypes.func.isRequired,
    removeCartItem: PropTypes.func.isRequired,
    removeFromShop: PropTypes.func.isRequired
};

export default ShopCartItem;