import React from "react";
import NoPrePay from "../Assets/Noprepay.png";
import Sell from "../Assets/Skid.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import PickMeals from "../Assets/pick-meals-image.png";
const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Гарантия 2 года",
      text: " ",
    },
    {
      image: ChooseMeals,
      title: "Низкая стоимость",
      text: "Услуги от 390 руб.",
    },
    {
      image: DeliveryMeals,
      title: "Быстрое реагирования",
      text: "Команда специалистов выезжает на место в течении часа",
    },
    {
      image: NoPrePay,
      title: "Работает без предоплаты",
      text: "Для выезда специалистов нет необходимости вносить предоплату",
    },
    {
      image: Sell,
      title: "Скидки",
      text: "Скидки пенсионерам ветеранам, инвалидам и многодетным семьям",
    },
    {
      image: DeliveryMeals,
      title: "Бесплатный выезд и диагностика",
      text: "Нет необходимости платить специалисту за вызов и диагностику (В случае оказания услуг по ремонту)",
    },
  ];
  return (
    <section id="id5">
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Предоставляемы услуги</p>
        <h1 className="primary-heading">Наши преимущества</h1>
        <p className="primary-text">
        Мы признаем, что бытовая техника является важной частью домашней жизни, поэтому мы делаем все возможное, чтобы наши клиенты получили быстрый и качественный ремонт. Обращайтесь к нам в любое время, и мы поможем вам вернуться к обычной жизни быстро и без лишних затрат.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
 </section>
  );
};

export default Work;
