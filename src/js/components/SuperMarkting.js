import React, { Component } from 'react';

class SuperMarkting extends Component {

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
            <div className='supermarkting'>

                <div className="logosupermarkting">
                    <img src="assets/images/U3.svg" />
                </div>
                <div className="itemsupermarkting" onClick={() => { this.goToPage('SuperMarktingSubject'); } }>
                    <div className="item-super">
                        <div className="top-img"><img src="assets/images/fru1.png" /></div>
                        <div className="bottom-super"><p>العروض</p></div>
                    </div>
                </div>
                <div className="items-supermarkting">
                    <div className="item-supermarkting" onClick={() => { this.goToPage('SuperMarktingSubject'); } }>
                        <div className="top-img"><img src="assets/images/Sub1.jpg" /></div>
                        <div className="bottom-supermarkting"><p>مشروبات</p></div>
                    </div>
                    <div className="item-supermarkting" onClick={() => { this.goToPage('SuperMarktingSubject'); } }>
                        <div className="top-img"><img src="assets/images/Sub2.jpg" /></div>
                        <div className="bottom-supermarkting"><p>السمن والزيوت</p></div>
                    </div>
                    <div className="item-supermarkting" onClick={() => { this.goToPage('SuperMarktingSubject'); } }>
                        <div className="top-img"><img src="assets/images/Sub3.jpg" /></div>
                        <div className="bottom-supermarkting"><p>الجبن والالبان</p></div>
                    </div>
                    <div className="item-supermarkting" onClick={() => { this.goToPage('SuperMarktingSubject'); } }>
                        <div className="top-img"><img src="assets/images/Sub4.jpg" /></div>
                        <div className="bottom-supermarkting"><p>البقوليات</p></div>
                    </div>
                </div>
            </div>
        );

    }
}

export default SuperMarkting;