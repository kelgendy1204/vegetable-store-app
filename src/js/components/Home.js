import React, { Component } from 'react';

class Home extends Component {

    constructor(props){
        super(props);
        this.toggleCart = this.toggleCart.bind(this);
    }

    toggleCart(e) {
        let cartItem = e.currentTarget;
        cartItem.classList.add('open');
    }

    render() {
        return (
            <div className="home">
                <div className="tools">
                    <a href="#"><i className="swap_vert material-icons">swap_vert</i></a>
                    <a href="#"><i className="apps material-icons">apps</i></a>
                    <a href="#"><i className="menu material-icons">menu</i></a>
                </div>
                <div className="items  ">
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
                            <div className="bottom-data" onTouchStart={ (e) => this.toggleCart(e) }>
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


                    <div className="item">
                        <div className="right-data">
                            <div className="down-data"></div>
                        </div>
                        <div className="left-data">
                            <div className="top-data">
                                <div className="right-data">
                                    <div className="center-data">
                                        <p className="one">كيلو طماطم بلدي</p>
                                    </div>
                                    <div className="centertwo-data">
                                        <div className="right-data">
                                            <p className="two">35  جنية</p>
                                            <p className="three">49 جنيه</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-data" onTouchStart={ (e) => this.toggleCart(e) }>
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
                            <div className="bottom-data" onTouchStart={ (e) => this.toggleCart(e) }>
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
                    <div className="item">
                        <div className="right-data">
                            <div className="down-data"></div>
                        </div>
                        <div className="left-data">
                            <div className="top-data">
                                <div className="right-data">
                                    <div className="one"><p>كيلو طماطم بلدي</p></div>
                                    <div className="two"><p>35  جنية</p></div>
                                    <div className="three"><p>49 جنيه</p></div>
                                </div>
                                <div className="lef-data">

                                </div>
                            </div>
                            <div className="bottom-data" onTouchStart={ (e) => this.toggleCart(e) }>
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
                </div>
            </div>

        );
    }

}

export default Home;