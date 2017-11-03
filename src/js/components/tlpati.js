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
                                     </div>
                                </div>
                                <div className="collapsible-body"><span>هو تطبيق يعمل علي تطوير خدمة التوصيل الي المنازل بشكل اسرع ومريح ويعمل علي التطور في عالم التوصيل والخدمة المتميزه وخضار مميز وغيره وغيره وغيره وحاجات تانيه كتير </span></div>
                            </li>
                            <li>
                                <div className="collapsible-header">
                                    ما هو لهلوبة ؟
                                </div>
                                <div className="collapsible-body"><span>هو تطبيق يعمل علي تطوير خدمة التوصيل الي المنازل بشكل اسرع ومريح ويعمل علي التطور في عالم التوصيل والخدمة المتميزه وخضار مميز وغيره وغيره وغيره وحاجات تانيه كتير </span></div>
                            </li>
                            <li>
                                <div className="collapsible-header">
                                    ما هو لهلوبة ؟
                                </div>
                                <div className="collapsible-body">
                                    <iframe width="100%" src="https://www.youtube.com/embed/nYFuxTXDj90" frameborder="0" allowfullscreen></iframe>
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
