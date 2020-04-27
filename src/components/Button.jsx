import React from "react";

<<<<<<< HEAD
export const Button = ({ text, buttonClass, handleCloseModal  }) => {
  return <button className={buttonClass} onClick={handleCloseModal} >{text}</button>
=======
// export const Button = ({ handleClick, text, buttonClass }) => {
//   return <a className={buttonClass} onClick={handleClick} href="/">{text}</a>
// }

export const Button = ({ text, buttonClass }) => {
  // return <a className={buttonClass} href="/">{text}</a>
  return <button className={buttonClass}>{text}</button>
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d
}