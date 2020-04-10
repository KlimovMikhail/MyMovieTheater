import React from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { getMovie } from "../actions/getMovieActions";
import { MovieContainer } from "../containers/MovieContainer"
import { AboutMovieContainer } from "../containers/AboutMovie"

class Main extends React.Component {

  componentDidMount() {
    this.props.getMovie();
  }

  render() {
    const {isLoading} = this.props
    return (
      <main className="main">
        {!isLoading && <Switch>
          <Route path={"/"} component={MovieContainer} exact />
          <Route path={"/movie/:id"} component={AboutMovieContainer} />
        </Switch>}
        
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  }
};

const mapDispatchToProps = {
  getMovie
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);