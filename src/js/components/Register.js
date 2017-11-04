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
                    <div className="my-input-field ">
                        <input id="name" type="text" className="validate" required />
                        <label htmlFor="name">الاسم</label>
                    </div>

                    <div className="my-input-field">
                        <input id="telephone" type="tel" className="validate" required pattern="[0-9]+"/>
                        <label htmlFor="telephone">رقم الهاتف</label>
                    </div>

                    <div className="my-input-field">
                        <input id="password" type="password" className="validate" required />
                        <label htmlFor="password">password</label>
                    </div>

                    <div className="my-input-field">
                        <input id="email" type="email" className="validate" required />
                        <label htmlFor="email">الايميل</label>
                    </div>


                    <div className="my-input-field">
                        <input id="mgawra" type="number" className="validate" required min="1" max="36"/>
                        <label htmlFor="mgawra">مجاورة</label>
                    </div>

                    <div className="my-input-field">
                        <input id="block" type="number" className="validate" required min="1" max="36"/>
                        <label htmlFor="mgawra">حى</label>
                    </div>

                    <div className="my-input-field">
                        <input id="puind" type="tel" className="validate" required />
                        <label htmlFor="telephone">عمارة رقم </label>
                    </div>

                    <div className="my-input-field">
                        <textarea id="message" className="materialize-textarea validate" required></textarea>
                        <label htmlFor="message"> العنوان بالتفصيل </label>
                    </div>

                    <div className="my-input-field center-align">
                        <a className="waves-effect waves-light btn" type="submit" id="submit">تسجيل</a>
                    </div>
                </form>
            </div>
        );
    }
}

// Login.propTypes = {
//     login: PropTypes.func.isRequired,
//     loggedIn: PropTypes.bool
// };

export default Login;