import React from 'react';
import { connect } from "react-redux"
import { getSession } from '../actions';
import { SessionsBlock } from "../components"
import { dateOptions } from "../constants"


class Schedule extends React.Component {
  componentDidMount() {
    this.props.getSession()
  };

  getNewSessions = () => {
    const { movies, sessions, rooms } = this.props;
    const sessionArr = movies.length && sessions.length && rooms.length ? sessions.map(item => {
      return item.map(elem => ({
        ...elem,
        room: rooms.find(room => room._id === elem.room).name,
        movie: movies.find(movie => movie._id === elem.movie)
      }));
    }) : [];
    return sessionArr.map(item => {
      return item.filter(elem => elem.movie)
    })
  }

  render() {
    return (
      <div>
        {
          this.getNewSessions().map((item, i) => (
            <div key={i}>
              <h1 className="session-date" >{new Date(item[0].date).toLocaleString("ru", dateOptions)}</h1>
              <div className="section-session ">
                <SessionsBlock moviesDate={item} />
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sessions: state.data.sessions,
    movies: state.data.movies,
    rooms: state.data.rooms
  }
}

const mapDispatchToProps = {
  getSession
}

export const ScheduleContainer = connect(mapStateToProps, mapDispatchToProps)(Schedule)
