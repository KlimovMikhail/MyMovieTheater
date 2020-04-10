import * as constants from "../constants";

const setLoading = () => ({type: constants.LOADING});
const setMovie = (movie) => ({type: constants.SET_MOVIE, payload: movie});
const setError = (error) => ({type: constants.SET_ERROR, payload: error});

export const getMovie = () => {
    return (dispatch) => {
        dispatch(setLoading());
        fetch(constants.URL_CINEMA)
        .then((movie) => {return movie.json()})
        .then((data) => {dispatch(setMovie(data))})
        .catch((error) => {dispatch(setError(error))});
    }
}