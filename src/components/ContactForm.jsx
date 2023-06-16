import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_utm6eli', 'template_jctjax9', form.current, 'fgdth6vCovIsNLznW')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" name="user_name" />
      <label>Email:</label>
      <input type="email" name="user_email" />
      <label>Message:</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};