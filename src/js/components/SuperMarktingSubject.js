import React, { Component } from 'react';
class FruitSubject extends Component {

    constructor(props){
        super(props);
        this.openCart = this.openCart.bind(this);
    }

    openCart(e) {
        let cartItem = e.currentTarget;
        cartItem.classList.add('open');
    }

    render() {

        return (
            <div className='supermarkting-subject'>
                <div className='items'>
                    <div className='item'>
                        <div className='right-data'>
                            <div className='up-data' >
                                <div className='content'>
                                    <p>%<span>10</span></p>
                                </div>
                            </div>
                            <div className='down-data'></div>
                        </div>
                        <div className='left-data'>
                            <div className='top-data'>
                                <div className='center-data'>
                                    <p className='one'> طماطم طازجه </p>
                                </div>
                                <div className='centertwo-data'>
                                    <div className='right-data'>
                                        <p className='two'>
                                            <span>
                                                15
                                            </span>
                                            جنية
                                        </p>
                                        <p className='three'> <span> 10 </span> جنيه</p>
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
                                    <div className='border1'><button>+</button></div>
                                    <div className='border2'><p>15</p></div>
                                    <div className='border3'><button>-</button></div>
                                    <div className='border4'>
                                        <button>
                                            <img src='./assets/images/8.svg' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default FruitSubject;