import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  const rewievsData = [
    {

      title: "Василевский И.Ф",
      text: " Выражаю огромную благодарность Алексею за его пунктуальность, профессионализм при ремонте моей стиральной машинки и человеческие качества при общении с клиентом!",
    },
    {
      title: "Иванов И.И",
      text: "Огромное спасибо мастеру за прекрасную работу, отремонтировал нашу любимую стиральную машинку, всё сделал грамотно и быстро, вернул к жизни нашу (старушку) .",
    },
    {
    
      title: "Кручинина Е.А",
      text: "Мастер быстро обнаружил причину неисправности и произвел замену деталей.",
    },
    {
  
      title: "Кузьменко В.Ю",
      text: "Оперативно, проффесионально определил проблему, заменил запчасти в стиральной машинке ( перестал крутиться барабан) .  Спасибо .",
    },
  ];
  return (
    <section id="id3">
      <div className="work-section-wrapper">
      <div className="work-section-top">
      
        <h1 className="primary-heading">Отзывы</h1>
      
      </div>
      <div className="work-section-bottom">
        {rewievsData.map((data) => (
          <div className="work-section-info" key={data.title}>
             <p className="Stars">
            <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          </p>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
           
          </div>
        ))}
      </div>
    </div>
    {/* 
    <div className="work-section-wrapper">
      <div className="work-section-top">
      <div className="work-section-bottom">
      </div>
      <h1>Отзывы</h1>
      <div className="work-section-info">
        <p>
        Выражаю огромную благодарность Алексею за его пунктуальность, профессионализм при ремонте моей стиральной машинки и человеческие качества при общении с клиентом!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Бабаева Валентина Анатольевна</h2>
      </div>
    </div>
   
    <div className="work-section-info">
        <p>
        Огромное спасибо мастеру за прекрасную работу, отремонтировал нашу любимую стиральную машинку, всё сделал грамотно и быстро, вернул к жизни нашу (старушку) . Побольше бы таких, грамотных, вежливых специалистов которые знают свою работу, просто Золотые руки у мастера. Спасибо!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Ломонов Егор Владимирович</h2>
      </div>
      </div>
              */
}
    </section>
  );
};

export default Testimonial;
