import React, { Component } from 'react';

class tlpati extends Component {

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
            <div className="tlpati-page container">
                <div className="row">
                    <div className="col s12">
                        <ul className="collapsible" data-collapsible="accordion">
                            <li className="item">
                                <div className="collapsible-header">
                                    <div className="fir-data">
                                        <img src='assets/images/iconfinal1.svg' />
                                        <p>0001</p>
                                    </div>
                                    <div className="sc-data">
                                        <p>100 <span className="sma">جنية</span></p>
                                    </div>
                                    <div className="last-data">
                                        <p>الاثنين 15/10</p>
                                        <p className="mark"></p>
                                    </div>
                                </div>
                                <div className="collapsible-body">
                                    <div className="rightdata">
                                        <div className="content-data">
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                        </div>
                                        <div className="cost-data">
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                        </div>
                                    </div>
                                    <div className="leftdata">
                                        <img src='assets/images/icondlev1.svg' />
                                    </div>
                                </div>
                            </li>


                            
                            <li className="item">
                                <div className="collapsible-header">
                                    <div className="fir-data">
                                        <img src='assets/images/iconfinal2.svg' />
                                        <p>0002</p>
                                    </div>
                                    <div className="sc-data">
                                        <p>100 <span className="sma">جنية</span></p>
                                    </div>
                                    <div className="last-data">
                                        <p>الاثنين 15/10</p>
                                        <p className="mark">&#x2713;</p>
                                    </div>
                                </div>
                                <div className="collapsible-body">
                                    <div className="rightdata">
                                        <div className="content-data">
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                        </div>
                                        <div className="cost-data">
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                        </div>
                                    </div>
                                    <div className="leftdata">
                                        <img src='assets/images/icondlev2.svg' />
                                    </div>
                                </div>
                            </li>
                            
                            
                            
                            <li className="item">
                                <div className="collapsible-header">
                                    <div className="fir-data">
                                        <img src='assets/images/iconfinal1.svg' />
                                        <p>0003</p>
                                    </div>
                                    <div className="sc-data">
                                        <p>100 <span className="sma">جنية</span></p>
                                    </div>
                                    <div className="last-data">
                                        <p>الاثنين 15/10</p>
                                        <p className="mark">&#x2713;</p>
                                    </div>
                                </div>
                                <div className="collapsible-body">
                                    <div className="rightdata">
                                        <div className="content-data">
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                        </div>
                                        <div className="cost-data">
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                        </div>
                                    </div>
                                    <div className="leftdata">
                                        <img src='assets/images/icondlev2.svg' />
                                    </div>
                                </div>
                            </li>
                            
                            
                            
                            
                            <li className="item">
                                <div className="collapsible-header">
                                    <div className="fir-data">
                                        <img src='assets/images/iconfinal3.svg' />
                                        <p>0004</p>
                                    </div>
                                    <div className="sc-data">
                                        <p>100 <span className="sma">جنية</span></p>
                                    </div>
                                    <div className="last-data">
                                        <p>الاثنين 15/10</p>
                                        <p className="mark">&#x2713;</p>
                                    </div>
                                </div>
                                <div className="collapsible-body">
                                    <div className="rightdata">
                                        <div className="content-data">
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                        </div>
                                        <div className="cost-data">
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                        </div>
                                    </div>
                                    <div className="leftdata">
                                        <img src='assets/images/icondlev2.svg' />
                                    </div>
                                </div>
                            </li>
                            
                            
                            
                            <li className="item">
                                <div className="collapsible-header">
                                    <div className="fir-data">
                                        <img src='assets/images/iconfinal4.svg' />
                                        <p>0005</p>
                                    </div>
                                    <div className="sc-data">
                                        <p>100 <span className="sma">جنية</span></p>
                                    </div>
                                    <div className="last-data">
                                        <p>الاثنين 15/10</p>
                                        <p className="mark">&#x2713;</p>
                                    </div>
                                </div>
                                <div className="collapsible-body">
                                    <div className="rightdata">
                                        <div className="content-data">
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                            <p>- 2 كيلو تفاح اخضر</p>
                                        </div>
                                        <div className="cost-data">
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                            <p>20 جنية</p>
                                        </div>
                                    </div>
                                    <div className="leftdata">
                                        <img src='assets/images/icondlev2.svg' />
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default tlpati;
