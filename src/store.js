import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { createBrowserHistory } from "history";
<<<<<<< HEAD
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from "./reducers";


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const history = createBrowserHistory();
=======

import { rootReducer } from "./reducers/movieReducer";


export const store = createStore(rootReducer, applyMiddleware(thunk));
export const history = createBrowserHistory();
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d
