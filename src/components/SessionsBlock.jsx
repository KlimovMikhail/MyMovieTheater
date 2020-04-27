import React from 'react';

import { MovieSchdule } from "../components"


export const SessionsBlock = ({ moviesDate }) => { 
  return moviesDate.map((elem) => ( <MovieSchdule key={elem._id} sessions={elem} />
  ))
}