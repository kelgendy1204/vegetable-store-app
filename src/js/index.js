import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import { Route } from 'react-router';
import PropTypes from 'prop-types';
import Reducers from './reducers';
import { MemoryRouter } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
let store = createStoreWithMiddleware(
    Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = ({ store }) => (
  <Provider store={store}>
    <MemoryRouter>
      <Route path="/" component={App} />
    </MemoryRouter>
  </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);

window.onload = function (){
    document.addEventListener('deviceready', () => {
        StatusBar.hide();
        if (typeof AndroidFullScreen !== 'undefined') {   // Fullscreen plugin exists ?
            // console.log(AndroidFullScreen);
            AndroidFullScreen.isSupported(() => {
                AndroidFullScreen.immersiveMode(null, null);
            }, () => {
                console.error(error);
            });
        }
    }, false);
};
