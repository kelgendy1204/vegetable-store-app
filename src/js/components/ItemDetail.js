import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

class ItemDetail extends Component {

    constructor(props){
        super(props);
        this.addToShopCart = this.addToShopCart.bind(this);
        this.share = this.share.bind(this);
    }

    share(){
        if(window.plugins){
            var options = {
              message: null, // not supported on some apps (Facebook, Instagram)
              subject: null, // fi. for email
              files: null, // an array of filenames either locally or remotely
              url: 'http://lahloba.net',
              chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
            }

            // var onSuccess = function(result) {
            //   console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
            //   console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
            // }

            // var onError = function(msg) {
            //   console.log("Sharing failed with message: " + msg);
            // }

            // window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);

            window.plugins.socialsharing.shareWithOptions(options, null, null);
        }

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
                                    <Carousel showArrows={false} showStatus={false} showThumbs={false} stopOnHover={false} autoPlay={true} swipeScrollTolerance={10} >
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
                                <button onClick={ () => { this.share() } }>
                                    <img src='assets/images/12.svg' />
                                </button>
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