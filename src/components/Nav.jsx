import React from "react";
import { NavLink } from "react-router-dom"

export const Nav = () => (
  <nav className="nav">
    <NavLink activeClassName="active" className="nav-item" exact to="/">Главная</NavLink>
    <NavLink activeClassName="active" className="nav-item" to="/schedule">Расписание сеансов</NavLink>
  </nav>
);