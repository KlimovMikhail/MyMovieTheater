import React from 'react';
import { connect } from "react-redux";
<<<<<<< HEAD

import { FilmInfo } from "../components";
import { Poster } from "../components";

class AboutMovie extends React.Component {

  state = {
    movie: [],
  };

  componentDidMount() {
    const { match, movies } = this.props;
    const movieId = match.params.id;
    const movie = movies.find(item => item._id === movieId);

    this.setState({ movie });
  }

  render() {
    const { movie } = this.state;
    const actors = movie.actors ? movie.actors.filter(item => item != null).map((item, i, arr) => (i === 0 || i === arr.length - 1) ? item : ", " + item) : "";
    const genre = movie.genre ? movie.genre.filter(item => item != null).map((item, i, arr) => (i === 0 || i === arr.length) ? item : ", " + item) : "";
    const country = movie.country ? movie.country.filter(item => item != null).map((item, i, arr) => (i === 0 || i === arr.length - 1) ? item : ", " + item) : "";

    return (

      <div className="grid width-4-5">
        <div className="grid-item width-1-3">
          <Poster src={movie.poster}  />
        </div>

        <div className="grid-item width-2-3">
          <h1 className="grid-item-title">{movie.title}</h1>
          <FilmInfo title="В главных ролях: " text={actors} />
          <FilmInfo title="Жанр: " text={genre} />
          <FilmInfo title="Производство: " text={country} />
=======
// import Image from "../components/Image";
import { FilmInfo } from "../components"


class AboutMovie extends React.Component {
  state = {
    movie:[]
  };

  componentDidMount() {
    const {match, movies} = this.props;
    const movieId = match.params.id;
    const movie = movies.find(item => item._id === movieId)
    // console.log("movie", movie)

    this.setState({movie})
  }

  render () {
    const { movie } = this.state;
    const actors = movie.actors ? movie.actors.join(", ").slice(0, -2) : "";
    const genre = movie.genre ? movie.genre.join(", ").slice(0, -2) : "";
    const country = movie.country ? movie.country.join(", ").slice(0, -2) : "";

    // const {movies} = this.props;
    // console.log("movie.poster", movie.poster);
    console.log("movies", movie)

    return (
      <div className="grid width-4-5">
        <div className="grid-item width-2-5">
          {/* <Image src={movie.poster} /> */}
          <img src={movie.poster} alt="img"/>
        </div>
        <div className="grid-item width-3-5">
          <h1 className="grid-item-title">{movie.title}</h1>
          <FilmInfo title="В главных ролях: " text={actors} />
          <FilmInfo title="Жанр: " text={genre} />
          <FilmInfo title="Страна производитель: " text={country} />
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d
          <FilmInfo title="Язык: " text={movie.language} />
          <FilmInfo title="Возраст: " text={`${movie.age}+`} />
          <FilmInfo title="Продолжительность: " text={movie.long} />
          <FilmInfo title="Краткое описание: " text={movie.description} />
<<<<<<< HEAD
          <FilmInfo title="Трейлер " text={<iframe
            title="text"
            width="100%"
            height="400px"
            src={movie.trailer}
            allowFullScreen
            frameborder="0" />} />
        </div>
      </div>
    );
  };
=======
        </div>
        <div className="width-1-1">
          {/* <video src={movie.trailer} controls="controls"></video> */}
          <iframe 
            title="text"
            width="100%"
            height="500px"
            src={movie.trailer}
            allowFullScreen />
        </div>
      </div>
    )
  }
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d
};

const mapStateToProps = (state) => {
  return {
<<<<<<< HEAD
    isLoading: state.loading.isLoading,
    movies: state.data.movies,
  };
};
=======
    movies: state.movies
  }
}
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d

export const AboutMovieContainer = connect(mapStateToProps)(AboutMovie)