import React from 'react';

export const HallPlaces = ({ space, handleSelectPlace }) => {
  return (
    <div className="section" >
      {
        space.map((item, indexRow) => {
          return (
            <div key={indexRow} className="section-hall" >
              <div className="section-hall-row" >Ряд {indexRow + 1} </div>
              {
                item.map((elem, indexPlace) => {
                  return (
                    <div
                      key={`${indexRow}-${indexPlace}`}
                      className={`section-hall-place${elem.booked ? "-booked" : ""}`}
                      onClick={ () => handleSelectPlace(elem) }
                    >
                      <span> {elem.place} </span>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  );
};