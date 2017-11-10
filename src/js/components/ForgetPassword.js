import React, { Component } from 'react';

class ForgetPassword extends Component {
    constructor(props) {
      super(props);
      this.activeAspect = this.activeAspect.bind(this);
    }

    goToPage(page) {
        let currPathName = this.props.history.location.pathname;
        if( currPathName != `/InnerPage/${page}` ){
            this.props.history.push(`/InnerPage/${page}`);
        }
    }

    activeAspect(aspectName){
        $('.active').removeClass('active');
        $(`.${aspectName}`).addClass('active');
    }

    render() {
        return (
            <div className="forgetpassword-page">
                <div className="bg-image">
                    <div className="bg-overlay">

                        <div className="content">
                            <div className="logo">
                                <img src="assets/images/logo2.svg" />
                            </div>

                            <h1>نسيت كلمة السر؟</h1>

                            <div className="my-input-field images-filed">
                                <button onClick={() => this.activeAspect('tel-aspect')} className="tel-aspect active"><img src="assets/images/sms.svg" /></button>
                                <button onClick={() => this.activeAspect('email-aspect')} className="email-aspect"><img src="assets/images/email.svg" /></button>
                            </div>

                            <div className="my-input-field email-aspect ">
                                <label>البريد الالكتروني</label>
                                <input type="email" id="email" required />
                            </div>

                            <div className="my-input-field tel-aspect active">
                                <label>رقم الموبايل</label>
                                <input type="tel" id="tel" required />
                            </div>

                            <button className="button">ارسال</button>

                            <p className="data-aspect tel-aspect active">
                                قم بادخال رقم الموبايل اعلاه و سوف نقوم بارسال رسالة بكلمة السر الجديدة
                            </p>

                            <p className="data-aspect email-aspect">
                                ادخل عنوان بريدك الالكتروني اعلاه و سوف نقوم بارسال بريد لاعادة ضبط كلمة السر الخاصة بك
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default ForgetPassword;