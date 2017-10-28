import React, { Component } from 'react';

class DryCleanSubject extends Component {

    constructor(props){
        super(props);
        this.openCategory = this.openCategory.bind(this);
    }

    componentDidMount(){
        $('.collapsible').collapsible();
    }

    componentWillUnmount(){
        $('.collapsible').collapsible('destroy');
    }

    openCategory(event){
        $('.data-item.opened').removeClass('opened');
        event.currentTarget.classList.add('opened');
    }

    openCart(e) {
        let cartItem = e.currentTarget;
        cartItem.classList.add('open');
    }

    render() {
        return (
            <div className='rust-subject'>


                <div className="info-data">
                    <div className="img-info"><img src="./assets/images/rus6.png" /></div>
                    <div className="data-tap">
                        <div className="one">
                            <p className="">مطعم كنتاكي</p>
                            <img src="./assets/images/rus5.svg" />
                        </div>
                        <div className="two">
                            <p className="">مطعم يقوم بتقديم وجبات مجهزة ويجد له فروع في مدينة حلوان ومدينة 15 مايو </p>
                        </div>
                    </div>
                </div>

                <div className="header-rust">

                    <div className="data-item opened" onClick={this.openCategory}>
                        <p>اكثر طلبا</p>
                    </div>

                    <div className="data-item" onClick={this.openCategory}>
                        <p>العروض</p>
                    </div>

                    <div className="data-item" onClick={this.openCategory}>
                        <p>الطلبات</p>
                    </div>

                </div>
                <ul className="items collapsible" data-collapsible="accordion">

                    <li>
                        <div className="collapsible-header">
                            الأكثر طلبا
                        </div>
                        <div className="collapsible-body item">
                            <div className='right-data'>
                                <div className='down-data'></div>
                            </div>
                            <div className='left-data'>
                                <div className='top-data'>
                                    <div className='center-data'>
                                        <p className='one'> وجبات فراخ فردية</p>
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
                    </li>


                    <li>
                        <div className="collapsible-header">
                            العروض
                        </div>
                        <div className="collapsible-body item">
                            <div className='right-data'>
                                <div className='down-data'></div>
                            </div>
                            <div className='left-data'>
                                <div className='top-data'>
                                    <div className='center-data'>
                                        <p className='one'> وجبات فراخ فردية</p>
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
                    </li>


                    <li>
                        <div className="collapsible-header">
                            أطباق الكشري
                        </div>
                        <div className="collapsible-body item">
                            <div className='right-data'>
                                <div className='down-data'></div>
                            </div>
                            <div className='left-data'>
                                <div className='top-data'>
                                    <div className='center-data'>
                                        <p className='one'> وجبات فراخ فردية</p>
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
                    </li>


                    <li>
                        <div className="collapsible-header">
                            أطباق الكشري
                        </div>
                        <div className="collapsible-body item">
                            <div className='right-data'>
                                <div className='down-data'></div>
                            </div>
                            <div className='left-data'>
                                <div className='top-data'>
                                    <div className='center-data'>
                                        <p className='one'> وجبات فراخ فردية</p>
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
                    </li>


                    <li>
                        <div className="collapsible-header">
                            أطباق الكشري
                        </div>
                        <div className="collapsible-body item">
                            <div className='right-data'>
                                <div className='down-data'></div>
                            </div>
                            <div className='left-data'>
                                <div className='top-data'>
                                    <div className='center-data'>
                                        <p className='one'> وجبات فراخ فردية</p>
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
                    </li>


                    <li>
                        <div className="collapsible-header">
                            أطباق الكشري
                        </div>
                        <div className="collapsible-body item">
                            <div className='right-data'>
                                <div className='down-data'></div>
                            </div>
                            <div className='left-data'>
                                <div className='top-data'>
                                    <div className='center-data'>
                                        <p className='one'> وجبات فراخ فردية</p>
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
                    </li>


                    <li>
                        <div className="collapsible-header">
                            أطباق الكشري
                        </div>
                        <div className="collapsible-body item">
                            <div className='right-data'>
                                <div className='down-data'></div>
                            </div>
                            <div className='left-data'>
                                <div className='top-data'>
                                    <div className='center-data'>
                                        <p className='one'> وجبات فراخ فردية</p>
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
                    </li>
                </ul>
            </div>
        );

    }
}

export default DryCleanSubject;