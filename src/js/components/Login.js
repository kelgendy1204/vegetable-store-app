import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-data">
                    <p> اسم المستخدم </p>
                    <div className="description-login">
                        <div className="input user-login">
                            <input type="text" placeholder="..........." />
                        </div>
                    </div>
                    <p>كلمة المرور</p>
                    <div className="description-login">
                        <div className="input password-login">
                            <input type="text" placeholder="..........." />
                        </div>
                    </div>
                    <p>رقم الموبيل</p>
                    <div className="description-login">
                        <div className="input phonnumber-login">
                            <input type="number" placeholder="..........." />
                        </div>
                    </div>
                </div>
                <div className="center-align">
                    <button className="finish">تسجيل الدخول</button>
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