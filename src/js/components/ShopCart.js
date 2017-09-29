import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ShopCart extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className='shop-cart'>
                <div className="items-cart">
                    <div className="item-cart">
                        <div className="right-data-cart"><img src="./assets/images/khyar.jpg" /></div>
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
                            <div className="content-data-left"><div className="content"><img src="./assets/images/1.svg" /></div></div>
                            <p>اجمالي الصنف</p>
                            <p className="one">105,99</p>
                            <p className="two">جنية</p>
                        </div>
                    </div>
                    <div className="item-cart">
                        <div className="right-data-cart"><img src="./assets/images/khyar.jpg" /></div>
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
                            <div className="content-data-left"><div className="content"><img src="./assets/images/1.svg" /></div></div>
                            <p>اجمالي الصنف</p>
                            <p className="one">105,99</p>
                            <p className="two">جنية</p>
                        </div>
                    </div>
                    <div className="item-cart">
                        <div className="right-data-cart"><img src="./assets/images/khyar.jpg" /></div>
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
                            <div className="content-data-left"><div className="content"><img src="./assets/images/1.svg" /></div></div>
                            <p>اجمالي الصنف</p>
                            <p className="one">105,99</p>
                            <p className="two">جنية</p>
                        </div>
                    </div>
                    <div className="item-cart">
                        <div className="right-data-cart"><img src="./assets/images/khyar.jpg" /></div>
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
                            <div className="content-data-left"><div className="content"><img src="./assets/images/1.svg" /></div></div>
                            <p>اجمالي الصنف</p>
                            <p className="one">105,99</p>
                            <p className="two">جنية</p>
                        </div>
                    </div>
                </div>

            </div>
        );

    }
}

// ShopCart.propTypes = {
//     cartItem: PropTypes.object.isRequired,
// };

export default ShopCart;