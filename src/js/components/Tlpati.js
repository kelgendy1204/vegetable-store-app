import React, { Component } from 'react';
import Collapse, { Panel } from 'rc-collapse';

function CollapseHeader(props) {
  return (<div className="collapsible-header">
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
        </div>);
}

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

                        <Collapse accordion={true}>

                            <Panel header={<CollapseHeader />}>
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
                            </Panel>

                            <Panel header={<CollapseHeader />}>
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
                            </Panel>

                            <Panel header={<CollapseHeader />}>
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
                            </Panel>

                        </Collapse>

                    </div>
                </div>
            </div>
        );
    }
}

export default tlpati;
