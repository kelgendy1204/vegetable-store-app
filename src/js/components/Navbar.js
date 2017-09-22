import React, { Component } from 'react';

class Navbar extends Component {

    componentDidMount() {
        $('.button-collapse').sideNav(
        {
            menuWidth: 300,
            closeOnClick: true,
            edge: 'right',
        });
    }

                  // <a href="#!" className="brand-logo left">Logo</a>
    render() {
        return (
          <div className="navbar-fixed">
              <nav>
                <div className="nav-wrapper">

                  <ul className="left">
                    <li>
                      <a href="#!" className="left">
                        <i className="search material-icons">search</i>
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="left">
                          <img className="cart" src="./assets/images/1.svg" />
                      </a>
                    </li>
                  </ul>

                  <ul className="right nav-right">
                    <li>
                      <a href="#" data-activates="mobile-demo" className="button-collapse">
                        <i className="material-icons">menu</i>
                      </a>
                      <a href="#">
                        <i className="material-icons reply">reply</i>
                      </a>
                    </li>
                  </ul>

                  <ul className="side-nav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                  </ul>

                </div>
              </nav>
            </div>
        );
    }

}

export default Navbar;