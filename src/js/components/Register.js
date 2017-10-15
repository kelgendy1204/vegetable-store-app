import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        $('select').material_select();
    }

    componentWillUnmount(){
        $('select').material_select('destroy');
    }

    render() {
        return (

            <div className="register-page container">
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
                            <div className="input-field marg col s12">
                                <select>
                                    <option value="" disabled selected> محافظة </option>
                                    <option value="1"> القاهرة </option>
                                </select>

                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field marg col s12">
                                <select>
                                    <option value="" disabled selected> المدينة </option>
                                    <option value="1"> 15 مايو </option>
                                    <option value="2"> امتداد 15 مايو </option>
                                </select>

                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">location_on</i>
                                <input id="mgawra" type="number" className="validate" required min="1" max="36"/>
                                <label htmlFor="mgawra">مجاورة</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">home</i>
                                <input id="block" type="number" className="validate" required min="1" max="36"/>
                                <label htmlFor="mgawra">حى</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_balance</i>
                                <input id="puind" type="tel" className="validate" required />
                                <label htmlFor="telephone">عمارة رقم </label>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mode_edit</i>
                                <textarea id="message" className="materialize-textarea validate" required></textarea>
                                <label htmlFor="message"> العنوان بالتفصيل </label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field but-rig col s12">
                                <a className="waves-effect waves-light btn" type="submit" id="submit"><i className="material-icons left">send</i> تسجيل </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            //            <div className="register-page">
            //                <div className="header-Regestration">
            //                    <div className="right-head"><p>بيانات الحساب</p></div>
            //                    <div className="left-head"><p>بيانات اضافية</p></div>
            //                </div>
            //                <section className="Regestration">
            //                    <div className="description">
            //                        <p>الاسم بالكامل</p>
            //                        <div className="center-input name">
            //                            <div className="input">
            //                                <input type="text" placeholder="..........." />
            //                            </div>
            //                        </div>
            //                    </div>
            //                    <div className="description">
            //                        <p>رقم المنزل </p>
            //                        <div className="center-input number-home">
            //                            <div className="input">
            //                                <input type="number" placeholder="..........." />
            //                            </div>
            //                        </div>
            //                    </div>
            //                    <div className="description">
            //                        <p>رقم الموبيل</p>
            //                        <div className="center-input number-mobile">
            //                            <div className="input">
            //                                <input type="number" placeholder="..........." />
            //                            </div>
            //                        </div>
            //                    </div>
            //                    <div className="description">
            //                        <p>المحافظة</p>
            //                        <div className="center-input Governorate">
            //                            <select>
            //                                <option value="القاهرة"> القاهرة </option>
            //                            </select>
            //                        </div>
            //                    </div>
            //                    <div className="description">
            //                        <p>المدينة</p>
            //                        <div className="center-input city">
            //                            <select>
            //                                <option value="15 مايو"> 15 مايو </option>
            //                            </select>
            //                        </div>
            //                    </div>
            //                    <div className="description">
            //                        <p>العنوان بالتفصيل</p>
            //                        <div className="center-input full-data">
            //                            <div className="input">
            //                                <input type="text" placeholder="..........." />
            //                            </div>
            //                        </div>
            //                    </div>
            //                </section>
            //                <div className="center-align">
            //                    <button className="finish">تسجيل</button>
            //                </div>
            //
            //            </div>
        );
    }
}

// Login.propTypes = {
//     login: PropTypes.func.isRequired,
//     loggedIn: PropTypes.bool
// };

export default Login;