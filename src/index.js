import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider } from 'react-redux';
import './index.css';
import App from './App';
import Reducer from './reducer';

const store =createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

