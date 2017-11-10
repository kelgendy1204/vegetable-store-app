import React, { Component } from 'react';

class Contact extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="contact-page">

                <div className="contact-header">
                    <div className="img-left"> <img src='assets/images/iconcall1.svg' /> </div>
                    <div className="data-right">
                        <div className="top-data">
                            <p> 0120356598 </p>
                            <img src='assets/images/iconcall2.svg' />
                        </div>
                        <div className="bottom-data">
                            <p> cs@lahlopa.net </p>
                            <img src='assets/images/iconcall3.svg' />
                        </div>
                    </div>

                </div>

                <div className="title"><p>نحن سعداء لتلقي استفسارتكم واقتراحتكم </p></div>


                <div className="text-data">
                    <div className="title-test">
                        <p>  اترك رسالتك </p>
                    </div>
                    <div className="text">

                    </div>
                </div>

                <div className="center-align" onClick={() => {this.goToPage('LoginRigister');}}>
                    <button className="finish"> ارســــــــال  </button>
                </div>

            </div>
        );
    }
}

export default Contact;
