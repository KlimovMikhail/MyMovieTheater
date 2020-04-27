import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
<<<<<<< HEAD
import { Router } from 'react-router-dom';

import  { App }  from './components';
import { store, history } from "./store";
=======
import App from './containers/App';
import {Router} from 'react-router-dom';


import { store, history } from "./store";
import './style/index.css';
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App></App>
    </Router>
  </Provider>,
  document.getElementById('root')
);


