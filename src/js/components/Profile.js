import React, { Component } from 'react';

class Profile extends Component {

    constructor(props){
        super(props);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.state = {
            name: 'محمد احمد محمود',
            email: 'admin@admin.com'
        };
    }

    toggleEdit(event){
        let elem = $(event.currentTarget).parent();
        let span = elem.find('span');
        let input = elem.find('input');
        if(span.hasClass('hide')){
            span.text(input.val());
        }
        if(input.hasClass('hide')){
            input.val(span.text());
        }
        span.toggleClass('hide');
        input.toggleClass('hide');
    }

    render() {
        return (
            <div className="profile-page register-page">

                <div className="user-pic">
                    <div className="user">
                        <img src="assets/images/profile.svg" />
                    </div>
                    <h1> <span>محمد احمد محمود</span> <input className="hide" type="text" /> <button onClick={this.toggleEdit}><i className="material-icons">edit</i></button></h1>
                    <h2> <span>admin@admin.com</span> <input className="hide" type="email" /> <button onClick={this.toggleEdit}><i className="material-icons">edit</i></button></h2>
                </div>

                <form onSubmit={ this.submitFirstPage }>

                    <div className="d-flex">
                        <div className="my-input-field w-50">
                            <input id="telephone" type="tel" className="validate" required />
                            <label htmlFor="telephone">رقم الموبايل</label>
                        </div>

                        <div className="my-input-field d-flex w-50 align-self-end">
                            <div className="d-flex w-50">
                                <input name="group1" type="radio" id="test1" />
                                <label className="radio" htmlFor="test1"><i className="fa fa-male" aria-hidden="true"></i></label>
                            </div>
                            <div className="d-flex w-50">
                                <input name="group1" type="radio" id="test2" />
                                <label className="radio" htmlFor="test2"><i className="fa fa-female" aria-hidden="true"></i></label>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex">
                        <div className="my-input-field w-50">
                            <input id="state" type="text" className="validate" required />
                            <label htmlFor="state">المحافظة</label>
                        </div>

                        <div className="my-input-field w-50">
                            <input id="city" type="text" className="validate" required />
                            <label htmlFor="city">المدينة</label>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="my-input-field w-50">
                            <input id="area" type="text" className="validate" required />
                            <label htmlFor="area">المنطقة</label>
                        </div>

                        <div className="my-input-field w-50">
                            <input id="street" type="text" className="validate" required />
                            <label htmlFor="street">الشارع</label>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="my-input-field w-50">
                            <input id="buildingno" type="number" className="validate" required />
                            <label htmlFor="buildingno">رقم المبني</label>
                        </div>

                        <div className="my-input-field w-50">
                            <input id="apartmentno" type="number" className="validate" required />
                            <label htmlFor="apartmentno">رقم الشقة</label>
                        </div>
                    </div>

                    <div className="btns-container">
                        <button className="button" type="submit" id="submit">اعادة تعيين كلمة السر</button>
                        <button className="button" type="submit" id="submit">حفظ التغيرات</button>
                    </div>

                </form>



            </div>
        );
    }
}

export default Profile;
