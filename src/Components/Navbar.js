/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";



const Navbar = () => {

  return (
    <nav>
      <div className="nav-logo-container">
        Г.Челябинск
      </div>
      <div className="navbar-links-container">
        <a className="content-link" href="#id1">Домой</a>
        <a href="#id2">О нас</a>
        <a href="#id3">Мастера</a>
        <a href="#id4">Контакты</a>
      </div>
    </nav>
  );
};

export default Navbar;
