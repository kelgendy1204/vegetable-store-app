import React, { Component } from 'react';

class Navbar extends Component {

    componentDidMount() {
        $(".button-collapse").sideNav(
        {
            menuWidth: 300,
            closeOnClick: true,
            edge: 'right',
        });
    }

    render() {
        return (
          <nav className="fixed">
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo left">Logo</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse right">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
              </ul>
            </div>
          </nav>
        );
    }

}

export default Navbar;