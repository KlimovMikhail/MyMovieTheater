import React from 'react';

export const FilmInfo = ({ title, text }) => {
  return (
    <div className="grid-item-desc">
      <div className="width-1-3"> {title} </div>
      <div className="grid-item-desc-content"> {text} </div>
    </div>
  )
}