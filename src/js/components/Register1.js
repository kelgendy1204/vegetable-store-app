import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Register1 extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        $('select').material_select();
    }

    componentWillUnmount(){
        $('select').material_select('destroy');
        // $('iframe').attr('display', 'none');
    }

    goToPage(page) {
        let currPathName = this.props.history.location.pathname;
        if( currPathName != `/InnerPage/${page}` ){
            this.props.history.push(`/InnerPage/${page}`);
        }
    }

    render() {
        return (

            <div className="register-page container">

                <div className="location-map">
                    <div className="map">
                        <iframe width="100%" height="100%" frameBorder="0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDQlK-FE56_UiPJgi5jL7UPL1B1elDRBi4&center=-33.8569,151.2152&zoom=18" allowFullScreen>
                        </iframe>
                    </div>
                    <button>
                        تحديد موقعك علي الخريطة
                    </button>
                </div>


                <form>

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
                        <input id="password" type="password" className="validate" required />
                        <label htmlFor="password"><i className="fa fa-mobile fa-big" aria-hidden="true"></i> المنطقة</label>
                    </div>

                    <div className="my-input-field">
                        <input id="email" type="email" className="validate" required />
                        <label htmlFor="email"><i className="fa fa-envelope" aria-hidden="true"></i> الشارع</label>
                    </div>

                    <div className="my-input-field">
                        <input id="mgawra" type="number" className="validate" required min="1" max="36"/>
                        <label htmlFor="mgawra"><i className="fa fa-lock fa-big" aria-hidden="true"></i> نوع العنوان</label>
                    </div>

                    <div className="my-input-field">
                        <input type="checkbox" className="filled-in" id="filled-in-box" />
                        <label htmlFor="filled-in-box">Filled in</label>
                    </div>

                    <div className="my-input-field dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>

                </form>

                <div className="my-input-field center-align">
                    <a onClick={() => {this.goToPage('Register2')}}  className="waves-effect waves-light btn" type="submit" id="submit">تسجيل</a>
                </div>

            </div>
        );
    }
}

// Register1.propTypes = {
//     login: PropTypes.func.isRequired,
//     loggedIn: PropTypes.bool
// };

export default Register1;