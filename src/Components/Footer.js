import React from "react";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import Logo from "../Assets/Logo.svg";

const Footer = () => {
  return (
    <>
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="#id1"><span>Домой</span></a>
          <a href="#id2"><span>О нас</span></a>
          <a href="#id4"><span>Услуги</span></a>
          <a href="#id5"><span>Мастера</span></a>
          <a href="#id6"><span>Оставить заявку</span></a>
        </div>
        <div className="footer-section-columns">
        <a href="tel:+78142332211"><span>+79789999999</span></a>
          <span>remont@mail.ru</span>
        </div>
      </div>
    
    </div>
    </>
  );
};

export default Footer;
