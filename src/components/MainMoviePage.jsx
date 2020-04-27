import React from 'react';
import { Link } from 'react-router-dom'

import { Image } from "../components/Image";
import defaltImage from "../assets/images/film.jpg";

export const MainMoviePage = ({ movie }) => {
  return (

    <div className="card-item width-1-5">
      <Link to={`movie/${movie._id}`}>
        <div className="card-image">
          <Image src={movie.poster} defaltImage={defaltImage} />
        </div>
        <div className="card-title">
          <p>{movie.title}</p>
        </div>
      </Link>
    </div>

  )
}