import * as constants from "../constants";
import { setError, setLoading } from "./general"

const setMovie = (movie) => ({type: constants.SET_MOVIE, payload: movie});

export const getMovie = () => {
    return (dispatch) => {
        dispatch(setLoading());
        fetch(constants.URL_CINEMA)
        .then((movie) => {return movie.json()})
        .then((data) => {dispatch(setMovie(data))})
        .catch((error) => {dispatch(setError(error))});
    }
}