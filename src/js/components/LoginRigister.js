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
                <div className="row">
                    <form className="col s12">

                        <div className="row">
                            <div className="input-field but-rig col s12"  onClick={() => {this.goToPage('Login');}} >
                                <a className="waves-effect waves-light btn" type="submit" id="submit"><i className="material-icons left">send</i> تسجيل الدخول  </a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field but-rig col s12"  onClick={() => {this.goToPage('Register');}} >
                                <a className="waves-effect waves-light btn" type="submit" id="submit"><i className="material-icons left">send</i> تسجيل اشتراك جديد </a>
                            </div>
                        </div>
                    </form>
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