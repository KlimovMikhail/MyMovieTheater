import React from 'react';
import defaltImage from "../assets/images/film.jpg";

import { Button, Image } from "../components";

export const Poster = ({ src, handleCloseModal }) => {
  return (
    <>
      <Image className="grid-item-image" src={src} defaltImage={defaltImage} />
      <Button buttonClass="button button-buy" text="buy ticket" handleCloseModal={handleCloseModal} />
    </>
  )
}