import React, { useState } from 'react';

import { Image, Button } from "../components";
import { BuyTickets } from "./BuyTickets";
import defaltImage from "../assets/images/film.jpg";



export const MovieSchdule = ({ sessions }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="card card-session width-1-3" >
      <div className="card-session-item width-1-2" >
        <Image src={sessions.movie.poster} defaltImage={defaltImage} />
      </div>

      <div className="card-session-item  width-1-2" >
        <h3 className="card-session-title" > {sessions.movie.title} </h3>
        <div className="card-session-room" style={{ backgroundColor: sessions.room }} >Зал</div>
        <p className="card-session-time">Начало сеанса: {new Date(sessions.date).toLocaleTimeString().slice(0, -3)} </p>
        <Button  handleCloseModal={handleShowModal} text="Купить билеты" buttonClass="button-buy" />
      </div>
      {showModal && <BuyTickets handleCloseModal={handleShowModal} session={sessions} />}
    </div>

  );
};