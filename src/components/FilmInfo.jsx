import React from 'react';

export const FilmInfo = ({ title, text }) => {
  return (
    <div className="grid-item-desc">
      <div> {title} </div>
      <div> {text} </div>
    </div>


  )
}