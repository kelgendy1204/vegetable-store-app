import React, { Component } from 'react';

class Help extends Component {

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
            <div className="help-page container">
                <div className="row">
                    <div className="col s12">
                        <ul className="collapsible" data-collapsible="accordion">
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

export default Help;
