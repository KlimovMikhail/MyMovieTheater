import React from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

<<<<<<< HEAD
import { AwesomeComponent } from "../components"
import { getMovie } from "../actions/getMovieActions";
import { MovieContainer } from "../containers/MovieContainer";
import { AboutMovieContainer } from "../containers/AboutMovie";
import { ScheduleContainer } from "../containers/MovieSession";
=======
import { getMovie } from "../actions/getMovieActions";
import { MovieContainer } from "../containers/MovieContainer"
import { AboutMovieContainer } from "../containers/AboutMovie"
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d

class Main extends React.Component {

  componentDidMount() {
    this.props.getMovie();
  }

  render() {
<<<<<<< HEAD
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
=======
    const {isLoading} = this.props
    return (
      <main className="main">
        {!isLoading && <Switch>
          <Route path={"/"} component={MovieContainer} exact />
          <Route path={"/movie/:id"} component={AboutMovieContainer} />
        </Switch>}
        
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
<<<<<<< HEAD
    isLoading: state.loading.isLoading
  };
=======
    isLoading: state.isLoading
  }
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d
};

const mapDispatchToProps = {
  getMovie
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);