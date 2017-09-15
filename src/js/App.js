import React, { Component } from 'react';
import Login from './containers/Login';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Link to='/Login'>
          To Login
        </Link>

        <Route path='/Login' component={ Login }/>

      </div>
    );
  }
}

export default App;
