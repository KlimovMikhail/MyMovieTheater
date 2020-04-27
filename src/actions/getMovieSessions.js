// import axios from "axios";

import * as constants from "../constants";
import { setError } from "./general"

const setSession = (session) => ({type: constants.SET_SESSIONS, payload: session});
const setRooms = (rooms) => ({type: constants.SET_ROOMS, payload: rooms});

export const getSession = () => {
  return (dispatch) => {
      Promise.all([fetch(constants.URL_SESSIONS), fetch(constants.URL_ROOMS)])
      .then(([sessions, rooms]) => {
        return Promise.all([sessions.json(), rooms.json()])
      } )
      .then((data) => {
        console.log("data2", data, data[0].session, data[1].rooms)
        dispatch(setSession(data[0].session))
        dispatch(setRooms(data[1].rooms))
      })
      .catch((error) => {dispatch(setError(error))});
  };
};

// export const getSession = () => {
//     return (dispatch) => {
//         dispatch(setLoading());
//         axios.get(constants.URL_SESSIONS)
//         .then((data) => {
//           // console.log(data)
//           dispatch(setSession(data.session))
//         })
//         .catch((error) => {dispatch(setError(error))});
//     }
// }