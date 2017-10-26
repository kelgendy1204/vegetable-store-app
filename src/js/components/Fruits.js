import React, { Component } from 'react';

class Fruits extends Component {

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
            <div className='fruits'>
                <div className="logofruit">
                    <img src="assets/images/U2.svg" />
                </div>
                <div className="items-fruit">
                    <div className="item-fruit" onClick={() => { this.goToPage('FruitSubject'); } }>
                        <div className="top-img"><img src="assets/images/fru1.png" /></div>
                        <div className="bottom-fruit"><p>العروض</p></div>
                    </div>

                    <div className="item-fruit" onClick={() => { this.goToPage('FruitSubject'); } }>
                        <div className="top-img"><img src="assets/images/fru2.png" /></div>
                        <div className="bottom-fruit"><p>فاكهة </p></div>
                    </div>

                    <div className="item-fruit" onClick={() => { this.goToPage('FruitSubject'); } }>
                        <div className="top-img"><img src="assets/images/fru3.png" /></div>
                        <div className="bottom-fruit"><p>خضروات طازجة</p></div>
                    </div>

                </div>
            </div>
        );

    }
}

export default Fruits;