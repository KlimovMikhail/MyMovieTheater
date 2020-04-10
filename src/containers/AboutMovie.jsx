import React from 'react';
import { connect } from "react-redux";
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
          <FilmInfo title="Язык: " text={movie.language} />
          <FilmInfo title="Возраст: " text={`${movie.age}+`} />
          <FilmInfo title="Продолжительность: " text={movie.long} />
          <FilmInfo title="Краткое описание: " text={movie.description} />
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
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

export const AboutMovieContainer = connect(mapStateToProps)(AboutMovie)