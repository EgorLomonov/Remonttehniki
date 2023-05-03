import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import AboutBackground from "../Assets/about-background.png";

const About = () => {
  return (
    <section id="id2">
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">О нас</p>
        <h1 className="primary-heading">
          Сервис по ремонту бытовой техники
        </h1>
        <p className="primary-text">
        Мы специализуемся на ремонте бытовой техники всех марок и моделей. Мы предлагаем услуги по ремонту холодильников, стиральных машин, посудомоечных машин, плит, духовых шкафов и другой бытовой техники.

        git init
        </p>
        <p className="primary-text">
        Мы имеем большой опыт работы и используем только качественные запчасти, чтобы гарантировать долговечность и надежность отремонтированной техники. В нашей компании работают только профессионалы своего дела, которые быстро и качественно выполняют ремонт.

        </p>
      </div>
    </div>
    </section>
  );
};

export default About;
