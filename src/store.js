import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { createBrowserHistory } from "history";

import { rootReducer } from "./reducers/movieReducer";


export const store = createStore(rootReducer, applyMiddleware(thunk));
export const history = createBrowserHistory();