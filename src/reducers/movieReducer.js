import * as constants from "../constants";

const initialState = {
  movies: [],
  isLoading: false,
  error: null
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOADING:
      return {
        ...state,
        isLoading: true
      }
    case constants.SET_MOVIE:
      return {
        ...state,
        movies: Object.values(action.payload.movie),
        isLoading: false 
      }
    case constants.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default: return state
  }
};