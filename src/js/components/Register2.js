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
                    <button className="button">
                        تحديد موقعك علي الخريطة
                    </button>
                </div>


                <form>


                    <div className="d-flex">
                        <div className="my-input-field w-50">
                            <input id="state" type="text" className="validate" required />
                            <label htmlFor="state">المحافظة</label>
                        </div>

                        <div className="my-input-field w-50">
                            <input id="city" type="text" className="validate" required pattern="[0-9]+"/>
                            <label htmlFor="city">المدينة</label>
                        </div>
                    </div>

                    <div className="my-input-field">
                        <input id="street" type="text" className="validate" required />
                        <label htmlFor="street">المنطقة</label>
                    </div>

                    <div className="my-input-field">
                        <input id="street" type="text" className="validate" required />
                        <label htmlFor="street">الشارع</label>
                    </div>

                    <div className="d-flex">
                        <div className="my-input-field w-50">
                            <input id="buildingno" type="number" title="رقم المبني" className="validate" required pattern="[0-9]+"/>
                            <label htmlFor="buildingno">رقم المبني</label>
                        </div>

                        <div className="my-input-field w-50">
                            <input id="apartmentno" type="number" title="رقم الشقة" className="validate" required pattern="[0-9]+"/>
                            <label htmlFor="apartmentno">رقم الشقة</label>
                        </div>
                    </div>

                    <div className="my-input-field">
                        <input id="addtype" type="text" className="validate" required />
                        <label htmlFor="addtype">نوع العنوان</label>
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