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
                                 First
                             </div>
                             <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                           </li>
                           <li>
                             <div className="collapsible-header">
                                 Second
                             </div>
                             <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                           </li>
                           <li>
                             <div className="collapsible-header">
                                 Third
                             </div>
                             <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                           </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Help;
