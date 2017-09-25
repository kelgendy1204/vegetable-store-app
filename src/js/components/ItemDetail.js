import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemDetail extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="item-detail">
                <div className="items-Product">
                    <div className="item ">
                        <div className="content1">
                            <p>تفاح امريكي </p>
                            <p className="sc">مستورد وذو جودة عالية</p>
                        </div>
                        <div className="a5tyar">
                            <div className="right-data">
                                <div className="up-data">
                                    <div className="content">
                                        <p><span className="font">%</span>10</p>
                                    </div>
                                </div>
                                <div className="down-data">
                                    <img src="assets/images/tmatm.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="content2">
                            <div className="one">
                                <p className="fir">35,5 جنية</p>
                                <p className="sc">40,90 جنية</p>
                            </div>
                            <div className="two">
                                <img src="assets/images/12.svg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <div className="content">
                        <img src="assets/images/1.svg" />
                        <p>اضف الي السلة</p>
                    </div>
                    <div className="hart">
                        <img src="assets/images/11.svg" />
                    </div>
                </div>

            </div>
        );
    }

}


export default ItemDetail;