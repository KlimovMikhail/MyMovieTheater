import * as constants from "../constants";
<<<<<<< HEAD
import { setError, setLoading } from "./general"

const setMovie = (movie) => ({type: constants.SET_MOVIE, payload: movie});
=======

const setLoading = () => ({type: constants.LOADING});
const setMovie = (movie) => ({type: constants.SET_MOVIE, payload: movie});
const setError = (error) => ({type: constants.SET_ERROR, payload: error});
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d

export const getMovie = () => {
    return (dispatch) => {
        dispatch(setLoading());
        fetch(constants.URL_CINEMA)
        .then((movie) => {return movie.json()})
        .then((data) => {dispatch(setMovie(data))})
        .catch((error) => {dispatch(setError(error))});
    }
}