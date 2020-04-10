import React from "react";

// export const Button = ({ handleClick, text, buttonClass }) => {
//   return <a className={buttonClass} onClick={handleClick} href="/">{text}</a>
// }

export const Button = ({ text, buttonClass }) => {
  // return <a className={buttonClass} href="/">{text}</a>
  return <button className={buttonClass}>{text}</button>
}