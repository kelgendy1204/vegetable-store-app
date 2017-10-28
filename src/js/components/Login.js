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
                                <i className="material-icons prefix">lock</i>
                                <input id="password" type="password" className="validate" required />
                                <label htmlFor="password">password</label>
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
        );
    }
}

// Login.propTypes = {
//     login: PropTypes.func.isRequired,
//     loggedIn: PropTypes.bool
// };

export default Login;