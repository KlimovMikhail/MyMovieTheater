import React from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { AwesomeComponent } from "../components"
import { getMovie } from "../actions/getMovieActions";
import { MovieContainer } from "../containers/MovieContainer";
import { AboutMovieContainer } from "../containers/AboutMovie";
import { ScheduleContainer } from "../containers/MovieSession";

class Main extends React.Component {

  componentDidMount() {
    this.props.getMovie();
  }

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return <AwesomeComponent />
    };

    return (
      <main className="main">
         <Switch>
          <Route path={"/"} component={MovieContainer} exact />
          <Route path={"/movie/:id"} component={AboutMovieContainer} />
          <Route path={"/schedule"} component={ScheduleContainer} />
        </Switch>       
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.loading.isLoading
  };
};

const mapDispatchToProps = {
  getMovie
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);