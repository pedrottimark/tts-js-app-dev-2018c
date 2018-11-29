import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';

import reducer from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const {createLogger} = require('redux-logger');
  const logger = createLogger({collapsed: true});
  middlewares.push(logger);
}
const store = createStore(reducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
