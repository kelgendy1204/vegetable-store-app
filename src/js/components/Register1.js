import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Register1 extends Component {

    constructor(props) {
        super(props);
        this.submitFirstPage = this.submitFirstPage.bind(this);
    }

    goToPage(page) {
        let currPathName = this.props.history.location.pathname;
        if( currPathName != `/InnerPage/${page}` ){
            this.props.history.push(`/InnerPage/${page}`);
        }
    }

    submitFirstPage(event){
        event.preventDefault();
        this.goToPage('Register2');
    }

    render() {
        return (

            <div className="register-page container">

                <div className="user-pic">
                    <div className="user">
                        <img src="assets/images/userpic.svg" />
                    </div>
                    <div className="button">
                        تسجيل مستخدم جديد
                    </div>
                </div>


                <form onSubmit={ this.submitFirstPage }>

                    <div className="d-flex">
                        <div className="my-input-field w-50">
                            <input id="name" type="text" className="validate" required />
                            <label htmlFor="name">
                            <i className="fa fa-user" aria-hidden="true"></i> الاسم</label>
                        </div>

                        <div className="my-input-field d-flex w-50 align-self-end">
                            <div className="d-flex w-50">
                                <input name="group1" type="radio" id="test1" />
                                <label className="radio" htmlFor="test1"><i className="fa fa-male" aria-hidden="true"></i></label>
                            </div>
                            <div className="d-flex w-50">
                                <input name="group1" type="radio" id="test2" />
                                <label className="radio" htmlFor="test2"><i className="fa fa-female" aria-hidden="true"></i></label>
                            </div>
                        </div>
                    </div>

                    <div className="my-input-field">
                        <input id="telephone" type="tel" className="validate" required />
                        <label htmlFor="telephone"><i className="fa fa-mobile fa-big" aria-hidden="true"></i> رقم الموبايل</label>
                    </div>

                    <div className="my-input-field">
                        <input id="email" type="email" className="validate" required />
                        <label htmlFor="email"><i className="fa fa-envelope" aria-hidden="true"></i> الايميل</label>
                    </div>

                    <div className="my-input-field">
                        <input id="password" type="password" className="validate" required/>
                        <label htmlFor="password"><i className="fa fa-lock fa-big" aria-hidden="true"></i> كلمة السر</label>
                    </div>

                    <div className="my-input-field">
                        <input type="checkbox" className="filled-in" id="filled-in-box" />
                        <label htmlFor="filled-in-box">موافق علي شروك التسجيل و سياسة تطبيق لهلوبة</label>
                    </div>

                    <div className="my-input-field dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>

                    <div className="my-input-field center-align">
                        <button className="waves-effect waves-light btn one" type="submit" id="submit">التالي</button>
                    </div>

                </form>

            </div>
        );
    }
}

// Register1.propTypes = {
//     login: PropTypes.func.isRequired,
//     loggedIn: PropTypes.bool
// };

export default Register1;