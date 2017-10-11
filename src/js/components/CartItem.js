import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {

    constructor(props){
        super(props);
        this.gotToDetails = this.gotToDetails.bind(this);
        this.openCart = this.openCart.bind(this);
    }

    gotToDetails(){
        this.props.history.push(`/InnerPage/ItemDetail/${this.props.data.id}`);
    }

    openCart(e) {
        let cartItem = e.currentTarget;
        cartItem.classList.add('open');
    }

    render() {
        let actualPrice = this.props.data.price - (this.props.data.price * this.props.data.discount / 100);
        return (
            <div className='item z-depth-3'>
                <div className='right-data'>
                    <div className={'up-data ' + (this.props.data.discount > 0 ? '' : 'hide')}>
                        <div className='content'>
                            <p>%<span>{ this.props.data.discount }</span></p>
                        </div>
                    </div>
                    <div className='down-data' onClick={ () => this.gotToDetails() } style = {{ backgroundImage: 'url(' + this.props.data.image + ')' }} ></div>
                </div>
                <div className='left-data'>
                    <div className='top-data'>
                        <div className='center-data'>
                            <p className='one'> { this.props.data.name } </p>
                        </div>
                        <div className='centertwo-data'>
                            <div className='right-data'>
                                <p className='two'>
                                    <span>
                                        { actualPrice }
                                    </span>
                                    جنية
                                </p>
                                <p className={'three ' + (this.props.data.discount > 0 ? '' : 'hide')}> <span> { this.props.data.price } </span> جنيه</p>
                            </div>
                            <div className='lef-data'>
                                <a className='hart'></a>
                                <a className='share'></a>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-data' onClick={ (e) => this.openCart(e) }>
                        <div className='content closed'>
                            <div className='img'><img src='./assets/images/1.svg' /></div>
                            <div className='data-fov'><p>اضف الي السلة</p></div>
                        </div>
                        <div className='content opened'>
                            <div className='border1'><button onClick={ () => this.props.addCartItem({ ...this.props.data }) } >+</button></div>
                            <div className='border2'><p>{this.props.data.amount}</p></div>
                            <div className='border3'><button onClick={ () => this.props.removeCartItem({ ...this.props.data }) } >-</button></div>
                            <div className='border4'>
                                <button onClick={ () => this.props.removeFromShop({ id: this.props.data.id }) }>
                                    <img src='./assets/images/8.svg' />
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
    history: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    removeCartItem: PropTypes.func.isRequired,
    addCartItem: PropTypes.func.isRequired,
    removeFromShop: PropTypes.func.isRequired
};

export default CartItem;