import React, { Component } from 'react';

class DryCleanSubject extends Component {

    constructor(props){
        super(props);
    }
    componentDidMount(){
        $('select').material_select();
    }

    componentWillUnmount(){
        $('select').material_select('destroy');
    }
    render() {

        return (
            <div className='dry-clean-subject'>

                <div className="header-dryclean">
                    <div className="right-data click-data">
                        <img  src="assets/images/Drys3icon1.svg"/>
                        <p>ملابس</p>
                    </div>
                    <div className="center-data">
                        <img  src="assets/images/Drys3icon2.svg"/>
                        <p>مفروشات</p>
                    </div>
                    <div className="left-data">
                        <img  src="assets/images/Drys3icon3.svg"/>
                        <p>اكسسوارات</p>
                    </div>
                </div>

                <div className="all-subject">
                    <div className="row">
                        <div className="input-field marg col s12">
                            <select>
                                <option value="" disabled selected> العنصر </option>
                                <option value="1"> القاهرة </option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field marg col s12">
                            <select>
                                <option value="" disabled selected> العنصر </option>
                                <option value="1"> القاهرة </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="row add-last">
                            <div className="input-field marg col s12">
                                <select>
                                    <option value="" disabled selected> العنصر </option>
                                    <option value="1"> القاهرة </option>
                                </select>
                            </div>
                        </div>
                        <div className="input-field but-rig col s12">
                            <a className="waves-effect waves-light btn" type="submit" id="submit"><i className="material-icons right">local_grocery_store</i> اضف </a>
                        </div>
                    </div>
                </div>
                 <div className="Dry-items">
                    <div className="items-Dry">
                        <div className="item-Dry">
                            <div className="right-data-Dry">
                                <div className="img" ></div>
                            </div>
                            <div className="center-data-Dry">
                                <div className="top-data">
                                    <div className="center-data">
                                        <p> غسيل ومكواة</p>
                                        <p className="two"> قميص </p>
                                    </div>
                                </div>
                             </div>
                            <div className="left-data-Dry">
                                <div className="content-data-left">
                                    <div className="content">
                                        <img src="./assets/images/Drys3icon8.svg" />
                                    </div>
                                </div>
                                <p> اجمالي القطع </p>
                                <p className="one">213</p>
                             </div>
                        </div>
                        
                        <div className="item-Dry">
                            <div className="right-data-Dry">
                                <div className="img" ></div>
                            </div>
                            <div className="center-data-Dry">
                                <div className="top-data">
                                    <div className="center-data">
                                        <p> غسيل ومكواة</p>
                                        <p className="two"> قميص </p>
                                    </div>
                                </div>
                             </div>
                            <div className="left-data-Dry">
                                <div className="content-data-left">
                                    <div className="content">
                                        <img src="./assets/images/Drys3icon8.svg" />
                                    </div>
                                </div>
                                <p> اجمالي القطع </p>
                                <p className="one">213</p>
                             </div>
                        </div>
                        <div className="item-Dry">
                            <div className="right-data-Dry">
                                <div className="img" ></div>
                            </div>
                            <div className="center-data-Dry">
                                <div className="top-data">
                                    <div className="center-data">
                                        <p> غسيل ومكواة</p>
                                        <p className="two"> قميص </p>
                                    </div>
                                </div>
                             </div>
                            <div className="left-data-Dry">
                                <div className="content-data-left">
                                    <div className="content">
                                        <img src="./assets/images/Drys3icon8.svg" />
                                    </div>
                                </div>
                                <p> اجمالي القطع </p>
                                <p className="one">213</p>
                             </div>
                        </div>
                        <div className="item-Dry">
                            <div className="right-data-Dry">
                                <div className="img" ></div>
                            </div>
                            <div className="center-data-Dry">
                                <div className="top-data">
                                    <div className="center-data">
                                        <p> غسيل ومكواة</p>
                                        <p className="two"> قميص </p>
                                    </div>
                                </div>
                             </div>
                            <div className="left-data-Dry">
                                <div className="content-data-left">
                                    <div className="content">
                                        <img src="./assets/images/Drys3icon8.svg" />
                                    </div>
                                </div>
                                <p> اجمالي القطع </p>
                                <p className="one">213</p>
                             </div>
                        </div>
                        <div className="item-Dry">
                            <div className="right-data-Dry">
                                <div className="img" ></div>
                            </div>
                            <div className="center-data-Dry">
                                <div className="top-data">
                                    <div className="center-data">
                                        <p> غسيل ومكواة</p>
                                        <p className="two"> قميص </p>
                                    </div>
                                </div>
                             </div>
                            <div className="left-data-Dry">
                                <div className="content-data-left">
                                    <div className="content">
                                        <img src="./assets/images/Drys3icon8.svg" />
                                    </div>
                                </div>
                                <p> اجمالي القطع </p>
                                <p className="one">213</p>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="center-align">
                    <button className="finish">انهاء الطلب</button>
                </div>
            </div>
        );

    }
}

export default DryCleanSubject;