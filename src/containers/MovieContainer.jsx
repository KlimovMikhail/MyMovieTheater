<<<<<<< HEAD
import React, { useState } from "react";
import { connect } from "react-redux";

import { MainMoviePage, MovieFilter } from "../components";
import { AwesomeComponent } from "../components"
import { getMovie } from "../actions/getMovieActions"

const Movies = ({ movies, genres, isLoading }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const [valueSelect, setValueSelect] = useState("");

  if (isLoading) {
    return <AwesomeComponent />
  }

  const getFilteredMovie = (valueInput, valueSelect) => {
    return movies.reduce((acc, item) => {
      if (
        valueInput && valueSelect &&
        item.genre && item.genre.length &&
        item.genre.some(elem => elem.trim() === valueSelect) &&
        item.title.toLowerCase().includes(valueInput.toLowerCase())
      ) {
        acc.push(item);
      } else if (
        valueInput && !valueSelect &&
        item.title.toLowerCase().includes(valueInput.toLowerCase())
      ) {
        acc.push(item);
      } else if (
        !valueInput && valueSelect &&
        item.genre && item.genre.length &&
        item.genre.some(elem => elem.trim() === valueSelect)
      ) {
        acc.push(item);
      } else if (
        valueSelect === "0" && valueInput
      ) {
        acc.push(item);
      }
      return acc;
    }, []);
  };

  const handleChangeInput = (event) => {
    const { value } = event.target;
    setValueInput(value);
    setFilteredMovies(getFilteredMovie(value, valueSelect));
  }

  const handleChangeSelect = (event) => {
    const { value } = event.target;
    setValueSelect(value)
    setFilteredMovies(getFilteredMovie(valueInput, value));
  };
  return (
    <>
      <div className="filter">
        <h3>Filter</h3>
        <select value={valueSelect} onChange={handleChangeSelect}>
          <option value="0">Выберите жанр</option>
          {genres.map((item, i) => <option key={i} value={item}> {item} </option>)}
        </select>
        <input
          type="text"
          name="filter"
          onChange={handleChangeInput}
          value={valueInput}
          placeholder="Введите название фильма" />
      </div>
      {/* <MovieFilter movies={movies} genres={genres} setFilteredMovies={setFilteredMovies} /> */}
      <div className="card ">
        {filteredMovies.length || valueInput
          ? filteredMovies.map(item => (<MainMoviePage key={item._id} movie={item} />))
          : movies.map(item => (<MainMoviePage key={item._id} movie={item} />))
        }
      </div>
=======
import React from "react";
import { connect } from "react-redux";
import { Button } from "../components/Button";
import { Link } from 'react-router-dom'

import Image from "../components/Image";

const Movies = (props) => {
  // console.log("props", props);
  return (
    <>
      {props.movies.map((item, i) =>
        <div className="card width-1-5">
          <div className="card-image">
            {/* <img key={i} src={item.poster} alt="img" /> */}
            <Image key={i} src={item.poster}/>
          </div>
          <div className="card-title">
            <p key={i}>{item.title}</p>
          </div>
          <Link className="button button-about" to={`movie/${item._id}`}>
            {/* <Button text="About film" /> */}
            About film
          </Link>
          <Button buttonClass="button button-buy" text="Buy ticket" />
        </div>)}
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d
    </>
  )
};

const mapStateToProps = (state) => {
  return {
<<<<<<< HEAD
    movies: state.data.movies,
    genres: state.data.genres,
    isLoading: state.loading.isLoading
  }
};

const mapDispatchToProps = {
  getMovie
}

export const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(Movies);
=======
    movies: state.movies
  }
};

export const MovieContainer = connect(mapStateToProps)(Movies);
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d
