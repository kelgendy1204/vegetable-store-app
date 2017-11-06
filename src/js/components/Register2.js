import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Register2 extends Component {

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
                            <label htmlFor="name">المحافظة</label>
                        </div>

                        <div className="my-input-field w-50">
                            <input id="telephone" type="tel" className="validate" required pattern="[0-9]+"/>
                            <label htmlFor="telephone">المدينة</label>
                        </div>
                    </div>

                    <div className="my-input-field">
                        <input id="password" type="password" className="validate" required />
                        <label htmlFor="password">المنطقة</label>
                    </div>

                    <div className="my-input-field">
                        <input id="email" type="email" className="validate" required />
                        <label htmlFor="email">الشارع</label>
                    </div>

                    <div className="d-flex">
                        <div className="my-input-field w-50">
                            <input id="name" type="text" className="validate" required />
                            <label htmlFor="name">رقم المبني</label>
                        </div>

                        <div className="my-input-field w-50">
                            <input id="telephone" type="tel" className="validate" required pattern="[0-9]+"/>
                            <label htmlFor="telephone">رقم الشقة</label>
                        </div>
                    </div>

                    <div className="my-input-field">
                        <input id="mgawra" type="number" className="validate" required min="1" max="36"/>
                        <label htmlFor="mgawra">نوع العنوان</label>
                    </div>

                    <div className="my-input-field dots two">
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>

                    <div className="my-input-field center-align">
                        <a className="waves-effect waves-light btn" type="submit" id="submit">تسجيل</a>
                    </div>

                </form>
            </div>
        );
    }
}

// Register2.propTypes = {
//     login: PropTypes.func.isRequired,
//     loggedIn: PropTypes.bool
// };

export default Register2;