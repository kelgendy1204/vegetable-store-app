import React, { Component } from 'react';

class Contact extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="contact-page container">
                <div className="row">
                  <form className="col s12">

                    <div className="row">
                        <div className="input-field col s12">
                          <i className="material-icons prefix">account_circle</i>
                          <input id="name" type="text" className="validate" required />
                          <label htmlFor="name">الاسم</label>
                        </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">phone</i>
                        <input id="telephone" type="tel" className="validate" required pattern="[0-9]+"/>
                        <label htmlFor="telephone">رقم الهاتف</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input id="email" type="email" className="validate" required />
                        <label htmlFor="email">الايميل</label>
                      </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="message" className="materialize-textarea validate" required></textarea>
                            <label htmlFor="message">رسالتك </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <a className="waves-effect waves-light btn" type="submit" id="submit"><i className="material-icons left">send</i>ارسال</a>
                        </div>
                    </div>

                  </form>
                </div>
            </div>
        );
    }
}

export default Contact;
