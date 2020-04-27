import * as constants from "../constants";

export const setLoading = () => ({type: constants.LOADING});
export const setError = (error) => ({type: constants.SET_ERROR, payload: error});
