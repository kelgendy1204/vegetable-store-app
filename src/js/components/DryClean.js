import React, { Component } from 'react';

class dryclean extends Component {

    constructor(props){
        super(props);
        this.goToPage = this.goToPage.bind(this);
    }

    goToPage(page) {
        let currPathName = this.props.history.location.pathname;
        if( currPathName != `/InnerPage/${page}` ){
            this.props.history.push(`/InnerPage/${page}`);
        }
    }

    render() {

        return (
            <div className='DryClean'>
                <div className="logodry">
                    <img src="assets/images/U1.svg" />
                </div>
                <div className="items-dry">
                    <div className="item-dry" onClick={() => {this.goToPage('DryCleanSubject');}}>
                        <div className="top-img"><img src="assets/images/dr1.png" /></div>
                        <div className="bottom-dry"><p>ملابس</p></div>
                    </div>
                    <div className="item-dry">
                        <div className="top-img"><img src="assets/images/dr2.png" /></div>
                        <div className="bottom-dry"><p>مفروشات</p></div>
                    </div>
                    <div className="item-dry">
                        <div className="top-img"><img src="assets/images/dr4.png" /></div>
                        <div className="bottom-dry"><p>اكسسورات</p></div>
                    </div>
                    <div className="item-dry">
                        <div className="top-img"><img src="assets/images/dr3.png" /></div>
                        <div className="bottom-dry"><p>سيارات</p></div>
                    </div>
                </div>
            </div>
        );

    }
}

export default dryclean;