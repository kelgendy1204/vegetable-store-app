import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavItem extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="menu-data">
                <p>
                    {this.props.data.name}
                </p>
                <img src={this.props.data.image} />
            </div>
        );
    }

}

NavItem.propTypes = {
    data: PropTypes.object.isRequired
};

export default NavItem;