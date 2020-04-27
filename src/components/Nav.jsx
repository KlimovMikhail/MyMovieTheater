import React from "react";
<<<<<<< HEAD
import { NavLink } from "react-router-dom"

export const Nav = () => (
  <nav className="nav">
    <NavLink activeClassName="active" className="nav-item" exact to="/">Главная</NavLink>
    <NavLink activeClassName="active" className="nav-item" to="/schedule">Расписание сеансов</NavLink>
=======

export const Nav = () => (
  <nav className="nav">
    <a href="/" className="nav-item">Главная</a>
    <a href="/" className="nav-item">Расписание сеансов</a>
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d
  </nav>
);