import React from "react";
import { NavLink } from "react-router-dom"


export const Logo = () => (
  <div className="logo">
     <NavLink activeClassName="active"  exact to="/">Movie Theater</NavLink>
  </div>
);