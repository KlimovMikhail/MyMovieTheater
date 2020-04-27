import { combineReducers } from "redux";
import { loading } from "./loadReducer";
import { data } from "./movieReducer";
// import { sessions } from "./sessionReducer";
// import { rooms } from "./roomsReducer";

export const rootReducer = combineReducers({
  loading: loading,
  data: data,
  // sessions: sessions,
  // rooms: rooms
})