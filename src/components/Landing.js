import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                  <img src="./images/Contact_Us.png" />
                </li>
                <li className="menu_item about page">
                  <img src="./images/About_Us.png" />
                </li>
                <li className="menu_item Share">
                  <img src="./images/Share.png" />
                </li>
                <li className="menu_item Logout">
                  <img src="./images/Log_out.png" />
                </li>
                <li className="menu_item ">
                  <img src="./images/whatsapp.png" />
                  <img src="./images/facebool_icon.png" />
                  <img src="./images/website.png" />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="noselect">
          <div className="seperation_layer"></div>
          <div id="LoginDiv" className="login">
            <div className='background'>
              <img className="star" src="images/Global/Star.svg" />
              <img className="star" src="images/Global/Star.svg" />
              <img className="star" src="images/Global/Star.svg" />
              <img className="star" src="images/Global/Star.svg" />
              <img className="star" src="images/Global/Star.svg" />
              <img className="star" src="images/Global/Star.svg" />
              <img className="star" src="images/Global/Star.svg" />
              <img className="star" src="images/Global/Star.svg" />
              <div className="pen_footer">
                <img src="images/Global/Pen.svg"/>
                <div className='text_footer'>
                  <p>جميع حقوق النشر محفوظة لدى المؤسسة العربية الحديثة  -
                    يحظر نشر أو توزيع أو طباعة أى مادة دون إذن مسبق من المؤسسة</p>
                  <p>
                    تصميم وتطوير وإدارة شركة المعلم أون لاين إحدى شركات المؤسسة العربية الحديثة
                  </p>
                </div>
              </div>
            </div>
            <div className="content {{this.isLoggedIn()}}">
              <div className="left">
                <div className="login_container">
                  <img src="images/facebook.png" className='fb' />
                  <img src="images/google.png" className='google' />
                  <img src="images/visitor.png" className='visitor' />
                </div>
              </div>
              <div className="right">
                <img className="logo" src="images/Global/logo.png" />
                <div className="character_star">
                  <img className="character" src="images/Global/Boy_Girl.png" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" />
                  <img className="flower" src="images/Global/Yellow_Flower.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Landing);