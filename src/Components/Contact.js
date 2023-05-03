import emailjs from '@emailjs/browser';
import React, { useRef } from "react";

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) =>{
   
      e.preventDefault();
  
      emailjs.sendForm('service_7bekteo', 'template_9odm1ib', form.current, 'Air89eMMtUEHDpFIk')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
  }
  return (
    <section id="id6">
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Оставьте свои контакты</h1>
      <h1 className="primary-heading">и мы свяжемся с вами</h1>
     
        <form ref={form} onSubmit={sendEmail}>
        <div className="contact-form-container">
        <input type="text" name="message" pattern="\+[0-9]{1,4}[0-9]{1,10}|(.*)@(.*)\.[a-z]{2,5}" oninvalid="setCustomValidity('Пожалуйста, введите номер телефона или email')"  placeholder="+7 (999)999-99-99"></input>  
        
        <button className="secondary-button" type="submit">Оставить заявку</button>
        </div>
        </form>

    </div>
    </section>
  );
};

export default Contact;
