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
            <div className='rust'>

                <div className='itemsrust'>
                    <div className='itemrust'  onClick={() => {this.goToPage('RustSubject');}}>
                        <div className='right-data'>
                            <div className='down-data'></div>
                        </div>
                        <div className='left-data'>
                            <div className='center-data'>
                                <p className='one'> مطعم كنتاكي </p>
                                <p className='two'> مطعم يقوم بتقديم الوجبات الجهزة </p>
                                <div className="Evaluation">
                                    <img src="./assets/images/rus2.png" />
                                </div>
                                <div className="time-data">
                                    <div className="timer-data">
                                        <img  src="./assets/images/rus4.png" />
                                        <p>  15 دقيقة</p>
                                    </div>
                                    <div className="delivery-service">
                                        <img  src="./assets/images/rus3.png" />
                                        <p> 3 جنية </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='itemrust'  onClick={() => {this.goToPage('RustSubject');}}>
                        <div className='right-data'>
                            <div className='down-data'></div>
                        </div>
                        <div className='left-data'>
                            <div className='center-data'>
                                <p className='one'> مطعم كنتاكي </p>
                                <p className='two'> مطعم يقوم بتقديم الوجبات الجهزة </p>
                                <div className="Evaluation">
                                    <img src="./assets/images/rus2.png" />
                                </div>
                                <div className="time-data">
                                    <div className="timer-data">
                                        <img  src="./assets/images/rus4.png" />
                                        <p>  15 دقيقة</p>
                                    </div>
                                    <div className="delivery-service">
                                        <img  src="./assets/images/rus3.png" />
                                        <p> 3 جنية </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='itemrust'  onClick={() => {this.goToPage('RustSubject');}}>
                        <div className='right-data'>
                            <div className='down-data'></div>
                        </div>
                        <div className='left-data'>
                            <div className='center-data'>
                                <p className='one'> مطعم كنتاكي </p>
                                <p className='two'> مطعم يقوم بتقديم الوجبات الجهزة </p>
                                <div className="Evaluation">
                                    <img src="./assets/images/rus2.png" />
                                </div>
                                <div className="time-data">
                                    <div className="timer-data">
                                        <img  src="./assets/images/rus4.png" />
                                        <p>  15 دقيقة</p>
                                    </div>
                                    <div className="delivery-service">
                                        <img  src="./assets/images/rus3.png" />
                                        <p> 3 جنية </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='itemrust'  onClick={() => {this.goToPage('RustSubject');}}>
                        <div className='right-data'>
                            <div className='down-data'></div>
                        </div>
                        <div className='left-data'>
                            <div className='center-data'>
                                <p className='one'> مطعم كنتاكي </p>
                                <p className='two'> مطعم يقوم بتقديم الوجبات الجهزة </p>
                                <div className="Evaluation">
                                    <img src="./assets/images/rus2.png" />
                                </div>
                                <div className="time-data">
                                    <div className="timer-data">
                                        <img  src="./assets/images/rus4.png" />
                                        <p>  15 دقيقة</p>
                                    </div>
                                    <div className="delivery-service">
                                        <img  src="./assets/images/rus3.png" />
                                        <p> 3 جنية </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='itemrust'  onClick={() => {this.goToPage('RustSubject');}}>
                        <div className='right-data'>
                            <div className='down-data'></div>
                        </div>
                        <div className='left-data'>
                            <div className='center-data'>
                                <p className='one'> مطعم كنتاكي </p>
                                <p className='two'> مطعم يقوم بتقديم الوجبات الجهزة </p>
                                <div className="Evaluation">
                                    <img src="./assets/images/rus2.png" />
                                </div>
                                <div className="time-data">
                                    <div className="timer-data">
                                        <img  src="./assets/images/rus4.png" />
                                        <p>  15 دقيقة</p>
                                    </div>
                                    <div className="delivery-service">
                                        <img  src="./assets/images/rus3.png" />
                                        <p> 3 جنية </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='itemrust'  onClick={() => {this.goToPage('RustSubject');}}>
                        <div className='right-data'>
                            <div className='down-data'></div>
                        </div>
                        <div className='left-data'>
                            <div className='center-data'>
                                <p className='one'> مطعم كنتاكي </p>
                                <p className='two'> مطعم يقوم بتقديم الوجبات الجهزة </p>
                                <div className="Evaluation">
                                    <img src="./assets/images/rus2.png" />
                                </div>
                                <div className="time-data">
                                    <div className="timer-data">
                                        <img  src="./assets/images/rus4.png" />
                                        <p>  15 دقيقة</p>
                                    </div>
                                    <div className="delivery-service">
                                        <img  src="./assets/images/rus3.png" />
                                        <p> 3 جنية </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='itemrust'  onClick={() => {this.goToPage('RustSubject');}}>
                        <div className='right-data'>
                            <div className='down-data'></div>
                        </div>
                        <div className='left-data'>
                            <div className='center-data'>
                                <p className='one'> مطعم كنتاكي </p>
                                <p className='two'> مطعم يقوم بتقديم الوجبات الجهزة </p>
                                <div className="Evaluation">
                                    <img src="./assets/images/rus2.png" />
                                </div>
                                <div className="time-data">
                                    <div className="timer-data">
                                        <img  src="./assets/images/rus4.png" />
                                        <p>  15 دقيقة</p>
                                    </div>
                                    <div className="delivery-service">
                                        <img  src="./assets/images/rus3.png" />
                                        <p> 3 جنية </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                </div>
            </div>
        );

    }
}

export default Fruits;