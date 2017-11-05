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
                <div className="bg-image"></div>
                <div className="bg-overlay"></div>

                <div className="content">
                    <div className="logo">
                        <img src="assets/images/logo2.svg" />
                    </div>

                    <form>
                        <div className="my-input-field">
                            <label>رقم الموبايل</label>
                            <input type="tel" />
                        </div>
                        <div className="my-input-field">
                            <label>كلمة السر</label>
                            <input type="password" />
                        </div>
                        <button>دخول</button>
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