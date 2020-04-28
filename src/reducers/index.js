import { combineReducers } from "redux";
import { loading } from "./loadReducer";
import { data } from "./movieReducer";

export const rootReducer = combineReducers({
  loading: loading,
  data: data,
})
