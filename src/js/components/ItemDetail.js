import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

class ItemDetail extends Component {

    constructor(props){
        super(props);
        this.addToShopCart = this.addToShopCart.bind(this);
    }

    addToShopCart(){
        this.props.addCartItem({ ...this.props.cartItem });
        this.props.history.push('/InnerPage/ShopCart');
    }

    render() {
        let actualPrice = this.props.cartItem.price - (this.props.cartItem.price * this.props.cartItem.discount / 100);

        return (
            <div className='item-detail'>
                <div className='items-Product'>
                    <div className='item'>
                        <div className='content1'>
                            <p> { this.props.cartItem.name } </p>
                            <p className='sc'> { this.props.cartItem.description } </p>
                        </div>
                        <div className='a5tyar'>
                            <div className='right-data'>
                                <div className={'up-data ' + (this.props.cartItem.discount > 0 ? '' : 'hide')}>
                                    <div className='content'>
                                        <p>
                                            <span className='font'>%</span>
                                            { this.props.cartItem.discount }
                                        </p>
                                    </div>
                                </div>
                                <div className='down-data'>
                                    <Carousel showArrows={false} showStatus={false} showThumbs={false} stopOnHover={false} autoPlay={true} >
                                        <div className="img" style = {{ backgroundImage: 'url(' + this.props.cartItem.image + ')' }} />
                                        <div className="img" style = {{ backgroundImage: 'url(' + this.props.cartItem.image + ')' }} />
                                        <div className="img" style = {{ backgroundImage: 'url(' + this.props.cartItem.image + ')' }} />
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        <div className='content2'>
                            <div className='one'>
                                <p className='fir'> <span> { actualPrice } </span> جنية</p>
                                <p className={'three ' + (this.props.cartItem.discount > 0 ? '' : 'hide')}> <span> { this.props.cartItem.price } </span> جنية</p>
                            </div>
                            <div className='two'>
                                <img src='assets/images/12.svg' />
                            </div>
                        </div>
                        <div className='content3'>
                            <p>جنية جنية جنية جنية جنية جنية جنية جنية جنية جنية جنية جنية جنية جنية جنية جنية جنية جنية جنية جنية جنية  جنية</p>
                        </div>
                    </div>
                </div>
                <div className='button'>
                    <div className='content' onClick={ (e) => { this.addToShopCart() } } >
                        <div className="img"><img src="./assets/images/1.svg" /></div>
                        <div className="data-fov"><p>اضف الي السلة</p></div>
                    </div>
                    <div className='hart'>
                        <img src='assets/images/11.svg' />
                    </div>
                </div>
            </div>
        );

    }
}

ItemDetail.propTypes = {
    cartItem: PropTypes.object.isRequired,
};

export default ItemDetail;