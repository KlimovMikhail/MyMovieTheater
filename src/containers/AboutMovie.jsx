import React from 'react';
import { connect } from "react-redux";

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
          <FilmInfo title="Язык: " text={movie.language} />
          <FilmInfo title="Возраст: " text={`${movie.age}+`} />
          <FilmInfo title="Продолжительность: " text={movie.long} />
          <FilmInfo title="Краткое описание: " text={movie.description} />
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
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.loading.isLoading,
    movies: state.data.movies,
  };
};

export const AboutMovieContainer = connect(mapStateToProps)(AboutMovie)