import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Login extends Component {

    constructor(props) {
        super(props);
        this.goToPage = this.goToPage.bind(this);
    }

    goToPage(page) {
        let currPathName = this.props.history.location.pathname;
        if( currPathName != `/InnerPage/${page}` ){
            this.props.history.push(`/InnerPage/${page}`);
        }
    }


    componentDidMount(){
        $('select').material_select();
    }

    componentWillUnmount(){
        $('select').material_select('destroy');
    }

    render() {
        return (

            <div className="login-rigister">
                <div className="bg-image">
                    <div className="bg-overlay">

                        <div className="content">
                            <div className="logo">
                                <img src="assets/images/logo2.svg" />
                            </div>

                            <div className="loginform">
                                <div className="my-input-field">
                                    <label>رقم الموبايل</label>
                                    <input type="tel" />
                                </div>
                                <div className="my-input-field">
                                    <label>كلمة السر</label>
                                    <input type="password" />
                                </div>
                                <button className="loginbtn">دخول</button>

                                <a href='#' className="forgetpassword">نسيت كلمة السر ؟</a>

                            </div>

                            <button className="registerbtn">مستخدم جديد</button>

                        </div>

                    </div>

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