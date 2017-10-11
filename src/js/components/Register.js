import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="register-page">
                <div className="header-Regestration">
                    <div className="right-head"><p>بيانات الحساب</p></div>
                    <div className="left-head"><p>بيانات اضافية</p></div>
                </div>
                <section className="Regestration">
                    <div className="description">
                        <p>الاسم بالكامل</p>
                        <div className="center-input name">
                            <div className="input">
                                <input type="text" placeholder="..........." />
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>رقم المنزل </p>
                        <div className="center-input number-home">
                            <div className="input">
                                <input type="number" placeholder="..........." />
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>رقم الموبيل</p>
                        <div className="center-input number-mobile">
                            <div className="input">
                                <input type="number" placeholder="..........." />
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>المحافظة</p>
                        <div className="center-input Governorate">
                            <select>
                                <option value="القاهرة"> القاهرة </option>
                            </select>
                        </div>
                    </div>
                    <div className="description">
                        <p>المدينة</p>
                        <div className="center-input city">
                            <select>
                                <option value="15 مايو"> 15 مايو </option>
                            </select>
                        </div>
                    </div>
                    <div className="description">
                        <p>العنوان بالتفصيل</p>
                        <div className="center-input full-data">
                            <div className="input">
                                <input type="text" placeholder="..........." />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="center-align">
                    <button className="finish">تسجيل</button>
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