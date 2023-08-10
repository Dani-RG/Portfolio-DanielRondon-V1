import React from "react";
import { Link } from "react-router-dom";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { LuAtSign } from "react-icons/lu";
import { ContactForm } from "../components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="contact-view" id="contact">
      <div className="section-container">
        <p className="big-title to-left to-dark" id="lets-get">
          Let’s get in touch!
        </p>
        <svg className="underline">
          <line x1="0" y1="1" x2="100%" y2="1" />
        </svg>
        <div className="contact-set">
          <div className="contact-logos">
            <motion.div
              initial={{ opacity: 0, y: "-200%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 1, duration: 0.5 }}
            >
              <Link
                to="https://www.linkedin.com/in/daniel-rondon-garcia-"
                target="_blank"
              >
                <TiSocialLinkedinCircular id="in-logo" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "-200%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 1.3, duration: 0.5 }}
            >
              <Link to="https://github.com/Dani-RG" target="_blank">
                <VscGithub />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "-200%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 1.6, duration: 0.5 }}
            >
              <Link to="mailto:daniel.deweb@gmail.com">
                <LuAtSign />
              </Link>
            </motion.div>
          </div>
          <ContactForm />
          <motion.a
            href="CV WebDev Daniel Rondon Garcia.pdf"
            download="CV WebDev Daniel Rondon Garcia.pdf"
            className="resume-btn"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Get Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
}
