/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BiPhoneCall } from "react-icons/bi";


const Navbar = () => {

  return (
    <nav className="nav-link">
      <div className="logotype4">
      <b>Ремонт</b> бытовой техники
    <div>Г.Челябинск</div>
      </div>
      <h1><BiPhoneCall/>&nbsp;&nbsp;&nbsp;<a href="tel:+78142332211">+79788158499</a></h1>
      <div className="navbar-links-container">
        <a className="content-link" href="#id1">Домой</a>
        <a href="#id2">О нас</a>
        <a href="#id3">Отзывы</a>
        <a href="#id4">Контакты</a>
      </div>
    </nav>
  );
};

export default Navbar;
