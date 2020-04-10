import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './containers/App';
import {Router} from 'react-router-dom';


import { store, history } from "./store";
import './style/index.css';


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App></App>
    </Router>
  </Provider>,
  document.getElementById('root')
);


