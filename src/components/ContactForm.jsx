import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export const ContactForm = () => {
  const form = useRef();

  const notify = () =>
    toast.success("Message sent!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_utm6eli",
        "template_jctjax9",
        form.current,
        "fgdth6vCovIsNLznW"
      )
      .then(
        (result) => {
          e.target.reset();
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="contact_form">
        <label>Name:</label>
        <input type="text" name="user_name" />
        <label>Email:</label>
        <input type="email" name="user_email" />
        <label>Message:</label>
        <textarea name="message" />
        <motion.button
          type="submit"
          className="send_btn"
          whileHover={{ scale: 1.1 }}
        >
          SEND
        </motion.button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
