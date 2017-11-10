import React, { Component } from 'react';

class Eltlpat extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        $(document).ready(function(){
            $('.collapsible').collapsible();
        });
    }

    componentWillUnmount(){
        $('.collapsible').collapsible('destroy');
    }

    render() {
        return (
            <div className="eltlpat">

                <div className="tlpat-items">
                    <div className="top-item">
                        <div className="right-data">
                            <img src='assets/images/iconfinal1.svg' />
                            <p>0001</p>
                        </div>
                        <div className="left-data">
                            <p>&#x2713;</p>
                        </div>
                    </div>
                    <div className="bottom-item">
                        <div className="right-data">
                            <img src='assets/images/icontimer1.svg' />
                            <p>تم تسليم طلبك </p>
                        </div>
                        <div className="left-data">
                            <img src='assets/images/icontimer.svg' />
                            <p> 08:00 </p>
                        </div>
                    </div>
                    <div className="arrow-up"></div>
                </div>


                <div className="tlpat-items">
                    <div className="top-item">
                        <div className="right-data">
                            <img src='assets/images/iconfinal1.svg' />
                            <p>0001</p>
                        </div>
                        <div className="left-data">
                            <p>&#x2713;</p>
                        </div>
                    </div>
                    <div className="bottom-item">
                        <div className="right-data">
                            <img src='assets/images/icontimer2.svg' />
                            <p> جاري توصيل طلبك </p>
                        </div>
                        <div className="left-data">
                            <img src='assets/images/icontimer.svg' />
                            <p> 07:55 </p>
                        </div>
                    </div>
                    <div className="arrow-up"></div>
                </div>

                <div className="tlpat-items">
                    <div className="top-item">
                        <div className="right-data">
                            <img src='assets/images/iconfinal1.svg' />
                            <p>0001</p>
                        </div>
                        <div className="left-data">
                            <p>&#x2713;</p>
                        </div>
                    </div>
                    <div className="bottom-item">
                        <div className="right-data">
                            <img src='assets/images/icontimer3.svg' />
                            <p>تم تجهيز طلبك </p>
                        </div>
                        <div className="left-data">
                            <img src='assets/images/icontimer.svg' />
                            <p> 07:50 </p>
                        </div>
                    </div>
                    <div className="arrow-up"></div>
                </div>
                
                <div className="tlpat-items">
                    <div className="top-item">
                        <div className="right-data">
                            <img src='assets/images/iconfinal1.svg' />
                            <p>0001</p>
                        </div>
                        <div className="left-data">
                            <p>&#x2713;</p>
                        </div>
                    </div>
                    <div className="bottom-item">
                        <div className="right-data">
                            <img src='assets/images/icontimer4.svg' />
                            <p>جاري تجهيز طلبك </p>
                        </div>
                        <div className="left-data">
                            <img src='assets/images/icontimer.svg' />
                            <p> 07:47 </p>
                        </div>
                    </div>
                    <div className="arrow-up"></div>
                </div>
                
                 <div className="tlpat-items">
                    <div className="top-item">
                        <div className="right-data">
                            <img src='assets/images/iconfinal1.svg' />
                            <p>0001</p>
                        </div>
                        <div className="left-data">
                            <p>&#x2713;</p>
                        </div>
                    </div>
                    <div className="bottom-item">
                        <div className="right-data">
                            <img src='assets/images/icontimer5.svg' />
                            <p>تم استلام طلبك </p>
                        </div>
                        <div className="left-data">
                            <img src='assets/images/icontimer.svg' />
                            <p> 07:45 </p>
                        </div>
                    </div>
                    <div className="arrow-up"></div>
                </div>
                
            </div>
        );
    }
}

export default Eltlpat;
