import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import login from '../actions/index';

class Landing extends Component {

  isLoggedIn(){
    if(this.props.loggedIn){
      return '';
    } else {
      return 'unregistered';
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="menu menu_translate" >
          <div className="seperation_layer"></div>
          <div className="menu_container">
            <nav>
              <ul>
                <li className="page profile">
                  <div className="user_image">
                    <div className="circle">
                    </div>
                  </div>
                  <div className="user_info">
                    <p className="name">Moustafa Mahmoud Salem</p>
                  </div>
                </li>
                <li className="menu_item contact page">
                  <img src="./images/Contact_Us.png" alt="" />
                </li>
                <li className="menu_item about page">
                  <img src="./images/About_Us.png" alt="" />
                </li>
                <li className="menu_item Share">
                  <img src="./images/Share.png" alt="" />
                </li>
                <li className="menu_item Logout">
                  <img src="./images/Log_out.png" alt="" />
                </li>
                <li className="menu_item ">
                  <img src="./images/whatsapp.png" alt="" />
                  <img src="./images/facebool_icon.png" alt="" />
                  <img src="./images/website.png" alt="" />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="noselect">
          <div className="seperation_layer"></div>
          <div id="LoginDiv" className="login">
            <div className='background'>
              <img className="star" src="images/Global/Star.svg" alt="" />
              <img className="star" src="images/Global/Star.svg" alt="" />
              <img className="star" src="images/Global/Star.svg" alt="" />
              <img className="star" src="images/Global/Star.svg" alt="" />
              <img className="star" src="images/Global/Star.svg" alt="" />
              <img className="star" src="images/Global/Star.svg" alt="" />
              <img className="star" src="images/Global/Star.svg" alt="" />
              <img className="star" src="images/Global/Star.svg" alt="" />
              <div className="pen_footer">
                <img src="images/Global/Pen.svg"alt="" />
                <div className='text_footer'>
                  <p>جميع حقوق النشر محفوظة لدى المؤسسة العربية الحديثة  -
                    يحظر نشر أو توزيع أو طباعة أى مادة دون إذن مسبق من المؤسسة</p>
                  <p>
                    تصميم وتطوير وإدارة شركة المعلم أون لاين إحدى شركات المؤسسة العربية الحديثة
                  </p>
                </div>
              </div>
            </div>
            <div className={`content ${this.isLoggedIn()}`}>
              <div className="left">
                <div className="login_container">
                  <img src="images/facebook.png" className='fb' alt="" />
                  <img src="images/google.png" className='google' alt="" />
                  <img onClick={() => {this.props.login(true)} } src="images/visitor.png" className='visitor' alt="" />
                </div>
              </div>
              <div className="right">
                <img className="logo" src="images/Global/logo.png" alt="" />
                <div className="character_star">
                  <img className="character" src="images/Global/Boy_Girl.png" alt="" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" alt="" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" alt="" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" alt="" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" alt="" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" alt="" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" alt="" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" alt="" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" alt="" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" alt="" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" alt="" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" alt="" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" alt="" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login } ,dispatch);
}


function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);