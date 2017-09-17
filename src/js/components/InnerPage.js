import React, { Component } from 'react';
import Navbar from './Navbar';
import { Route, Link } from 'react-router-dom';

class InnerPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default InnerPage;
