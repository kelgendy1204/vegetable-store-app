import React, { Component } from 'react';
import Collapse, { Panel } from 'rc-collapse';


class Help extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="help-page container">
                <div className="row">
                    <div className="col s12">

                        <Collapse accordion={true}>
                            <Panel header="ما هو لهلوبة ؟">
                                <span>هو تطبيق يعمل علي تطوير خدمة التوصيل الي المنازل بشكل اسرع ومريح ويعمل علي التطور في عالم التوصيل والخدمة المتميزه وخضار مميز وغيره وغيره وغيره وحاجات تانيه كتير </span>
                            </Panel>

                            <Panel header="ما هو لهلوبة ؟">this is panel content2 or other</Panel>

                            <Panel header="ما هو لهلوبة ؟">
                                <iframe width="100%" src="https://www.youtube.com/embed/nYFuxTXDj90" frameborder="0" allowfullscreen></iframe>
                            </Panel>
                        </Collapse>

                    </div>
                </div>
            </div>
        );
    }
}

export default Help;
