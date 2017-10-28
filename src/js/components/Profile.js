import React, { Component } from 'react';

class Profile extends Component {

    constructor(props){
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


            <div className="profile-page container">

                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle</i>
                        <p>أحمد فارس ابراهيم</p>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">phone</i>
                        <p>01068902487</p>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <p>mazika2day@gmail.com</p>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">location_on</i>
                        <p>القاهرة</p>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">location_on</i>
                        <p> 15 مايو </p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">location_on</i>
                        <p> 15 </p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">home</i>
                        <p> ج </p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_balance</i>
                        <p> 9 </p>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">mode_edit</i>
                        <p> مجاوره 30 حي ج عمارة 8 شقة 7   </p>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field but-rig col s12">
                        <a className="waves-effect waves-light btn" type="submit" id="submit"><i className="material-icons left">edit</i> تعديل البيانات </a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Profile;
