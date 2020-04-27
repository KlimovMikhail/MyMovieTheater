import * as constants from "../constants";

const initialState = {
  isLoading: false,
}

export const loading = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOADING:
      return {
        ...state,
        isLoading: true
      }
    case constants.SET_MOVIE:
    case constants.SET_SESSIONS:
    case constants.SET_ROOMS:
    case constants.SET_ERROR:
      return {
        ...state,
        isLoading: false
      }
    default: return state
  }
};