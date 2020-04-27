<<<<<<< HEAD
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
=======
// const initialState = {
//   movies: []
// }

// export const rootReducer = (state = initialState, actions) => {};
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d
