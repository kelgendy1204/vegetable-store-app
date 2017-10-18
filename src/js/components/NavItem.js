import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavItem extends Component {

    constructor(props){
        super(props);
        // this.changeActiveCategory = this.changeActiveCategory.bind(this);
    }

    // changeActiveCategory(){
    //     this.props.changeActiveCategory(this.props.data.id);
    //     $('.button-collapse').sideNav('hide');
    //     if( this.props.history.location.pathname != '/InnerPage/Home' ){
    //         this.props.history.push('/InnerPage/Home');
    //     }
    // }

    goToSubCategory(){
        $('.button-collapse').sideNav('hide');
        if( this.props.history.location.pathname != '/InnerPage/SubCategory' ){
            this.props.history.push('/InnerPage/SubCategory');
        }
    }

    render() {
        return (
            <div className="menu-data" onClick={ () => this.goToSubCategory() } >
                <p>
                    {this.props.data.name}
                </p>
                <img src={this.props.data.image} />
            </div>
        );
    }

}

NavItem.propTypes = {
    data: PropTypes.object.isRequired,
    // changeActiveCategory: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default NavItem;