import React from "react";

export const Button = ({ text, buttonClass, handleCloseModal  }) => {
  return <button className={buttonClass} onClick={handleCloseModal} >{text}</button>
}