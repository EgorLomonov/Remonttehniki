import React from "react";
import { FiArrowRight } from "react-icons/fi";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <section id="id1">
    <div  className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Ремонт бытовой техники на дому, в городе Челябинск
          </h1>
          <p className="primary-text">
            Наша компания занимается ремонтом бытовой техники на дому. 
            <p>Обратившись к нам вы получаете:</p>
            <p> Высококачественных специалистов;</p>
            <p> Быструю и качественную помощь; </p>
            <p>  Выгодные условия оплаты.</p>
          </p>
          <a className="goToContact" href="#id6">
          <button className="secondary-button">
            Контакты компании <FiArrowRight />{" "}
          </button>
          </a>
        </div>
        
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      
      </div>
    </div>
    </section>
  );
};

export default Home;
