import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './Store';
import { Provider } from 'react-redux';
import App from './App';

// Store.subscribe(()=>console.log(Store.getState()))
ReactDOM.render(
  <>
  <Provider store={Store}>
    <App/>
  </Provider>
  </>,
  document.getElementById('root')
);

