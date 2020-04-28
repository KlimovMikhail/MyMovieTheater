import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { createBrowserHistory } from "history";
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from "./reducers";


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const history = createBrowserHistory();
