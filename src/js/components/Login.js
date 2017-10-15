import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-page container">
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
                            <div className="input-field but-rig col s12">
                                <a className="waves-effect waves-light btn" type="submit" id="submit"><i className="material-icons left">send</i> تسجيل الدخول </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            //            <div className="login-page">
            //                <div className="login-data">
            //                    <p> اسم المستخدم </p>
            //                    <div className="description-login">
            //                        <div className="input user-login">
            //                            <input type="text" placeholder="..........." />
            //                        </div>
            //                    </div>
            //                    <p>كلمة المرور</p>
            //                    <div className="description-login">
            //                        <div className="input password-login">
            //                            <input type="text" placeholder="..........." />
            //                        </div>
            //                    </div>
            //                    <p>رقم الموبيل</p>
            //                    <div className="description-login">
            //                        <div className="input phonnumber-login">
            //                            <input type="number" placeholder="..........." />
            //                        </div>
            //                    </div>
            //                </div>
            //                <div className="center-align">
            //                    <button className="finish">تسجيل الدخول</button>
            //                </div>
            //            </div>
        );
    }
}

// Login.propTypes = {
//     login: PropTypes.func.isRequired,
//     loggedIn: PropTypes.bool
// };

export default Login;