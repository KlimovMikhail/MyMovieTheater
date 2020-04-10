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
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
};

export const MovieContainer = connect(mapStateToProps)(Movies);