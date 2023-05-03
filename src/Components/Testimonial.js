import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <section id="id5">
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Наши мастера</p>

        <p className="primary-text">
        Позвоните или напишите сейчас! Я всегда на связи. Гарантирую – останетесь довольны!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Здравствуйте - я  Даниил - сертифицированный мастер по ремонту стиральных машин, холодильников, посудомоечных машин в городе Челябинске. Быстрый и аккуратный ремонт за 1,5-3 ч. Работаю с гарантией, БЕЗ ПОСРЕДНИКОВ!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Богомазов  Даниил Сегеевич</h2>
      </div>
    </div>
    </section>
  );
};

export default Testimonial;
