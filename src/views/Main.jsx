import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiDoubleQuotesL } from "react-icons/ri";
import danielPhoto from "../images/danielRG_photo_noBG.png";
import nhPic00 from "../images/mockups/NH_iphone_mockup_00.png";
import nhPic01 from "../images/mockups/NH_iphone_mockup_01.png";
import nhPic02 from "../images/mockups/NH_iphone_mockup_02.png";
import nhPic04 from "../images/mockups/NH_iphone_mockup_04.png";
import mgPic01 from "../images/mockups/MG_iphone_mockup_01.png";
import mgPic02 from "../images/mockups/MG_iphone_mockup_02.png";
import atPic00 from "../images/mockups/AT_ipad_mockup_00.png";
import atPic01 from "../images/mockups/AT_ipad_mockup_01.png";
import { MdOutlineLaunch } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import ihLogo from "../images/ironhack.png";
import EvolisLogo from "../images/evolis3d.png";
import lasalleLogo from "../images/LaSalleBCN222.png";
import ucvLogo from "../images/Logo_Universidad_Central_de_Venezuela.svg.png";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { LuAtSign } from "react-icons/lu";
import { ContactForm } from "../components/ContactForm";
import { motion } from "framer-motion";
import TestimonialsModal from "../components/TestimonialsModal";
import Carousel from "../components/Carousel";

const NHmockupArr = [nhPic00, nhPic01, nhPic02, nhPic04];
const MGmockupArr = [mgPic01, mgPic02];
const ATmockupArr = [atPic00, atPic01];

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main">
      <div className="home-view" id="home">
        <div className="home-text">
          <div className="danielrondon-text">
            <motion.p
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              DANIEL
            </motion.p>
            <motion.p
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              RONDON
            </motion.p>
          </div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="fullstack-webdev-text big-title">
              Full Stack Web Developer
            </div>
            <svg className="underline-alt-color">
              <line x1="0" y1="1" x2="100%" y2="1" />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="about-view" id="about">
        <div className="section-container">
          <p className="big-title to-light">About</p>
          <svg className="underline">
            <line x1="0" y1="1" x2="100%" y2="1" />
          </svg>
          <div className="about-set">
            <div className="about-text">
              <p className="texts-letters-02">
                With a professional background in architecture and 3D
                visualization, I have now become a full-stack web developer.
              </p>
              <p className="texts-letters-02">
                Knowing how to integrate the frontend with the backend to bring
                to life designs and applications that are both interesting and
                emotionally engaging.
              </p>
              <p className="texts-letters-02">
                My goal is to create experiences that are not only enjoyable but
                also direct users towards the essential point of the journey.
              </p>
            </div>
            <div className="about-photo-phrase">
              <div className="circle-container">
                <img src={danielPhoto} alt="danielPhoto" />
              </div>
              <div className="quote-phrase">
                <RiDoubleQuotesL className="quotes" />
                <p className="texts-letters-01 to-light to-italic">
                  My creative mind is driven by organized processes and
                  prioritizing effective functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-btn">
          <button onClick={() => setIsOpen(true)}>
            Testimonials
          </button>
          <TestimonialsModal open={isOpen} onClose={() => setIsOpen(false)}>
            <Carousel />
          </TestimonialsModal>
        </div>
      </div>
      <div className="projects-view" id="projects">
        <div className="section-container">
          <p className="big-title to-dark">Projects</p>
          <svg className="underline">
            <line x1="0" y1="1" x2="100%" y2="1" />
          </svg>
          <div className="one-project">
            <div className="project-header">
              <p className="medium-title">Nature Heroes</p>
              <motion.div whileHover={{ scale: 1.3 }}>
                <Link
                  to="https://nature-heroes.netlify.app/"
                  target="_blank"
                  className="launch-btn"
                >
                  <MdOutlineLaunch />
                </Link>
              </motion.div>
            </div>
            <p className="texts-letters-01">
              A React.js Full Stack Web App that promotes animal conservation
              awareness.
            </p>
            <div className="mockups-set">
              {NHmockupArr.map((image, index) => {
                return (
                  <img
                    src={image}
                    alt={index}
                    key={index}
                    className="iphone-mockup"
                  />
                );
              })}
            </div>
          </div>

          <div className="one-project">
            <div className="project-header">
              <p className="medium-title">MarkGet</p>
              <motion.div whileHover={{ scale: 1.3 }}>
                <Link
                  to="https://markget.fly.dev/"
                  target="_blank"
                  className="launch-btn"
                >
                  <MdOutlineLaunch />
                </Link>
              </motion.div>
            </div>
            <p className="texts-letters-01">
              An Express.js Full Stack Web App that compares the prices of
              supermarket products.
            </p>
            <div className="mockups-set">
              {MGmockupArr.map((image, index) => {
                return (
                  <img
                    src={image}
                    alt={index}
                    key={index}
                    className="iphone-mockup"
                  />
                );
              })}
            </div>
          </div>

          <div className="one-project">
            <div className="project-header">
              <p className="medium-title">At 18:36!</p>
              <motion.div whileHover={{ scale: 1.3 }}>
                <Link
                  to="https://dani-rg.github.io/Project-1-Game-At-18.34/"
                  target="_blank"
                  className="launch-btn"
                >
                  <MdOutlineLaunch />
                </Link>
              </motion.div>
            </div>
            <p className="texts-letters-01">
              A Javascript videogame with HTML Canvas.
            </p>
            <div className="mockups-set">
              {ATmockupArr.map((image, index) => {
                return (
                  <img
                    src={image}
                    alt={index}
                    key={index}
                    className="ipad-mockup"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className="techStack-view" id="techStack">
        <div className="section-container">
          <p className="big-title to-light">Tech Stack</p>
          <svg className="underline">
            <line x1="0" y1="1" x2="100%" y2="1" />
          </svg>
          <div className="tech-cards">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 1, duration: 0.9 }}
            >
              <p className="medium-title to-alt">Frontend</p>
              <div className="frontend-card">
                <div className="frontend-horiz-align">
                  <FaReact className="tools-letters" />
                  <p className="tools-letters">React</p>
                </div>
                <div className="frontend-horiz-align">
                  <IoLogoJavascript className="tools-letters" />
                  <p className="tools-letters">Javascript (ES6)</p>
                </div>
                <div className="frontend-horiz-align">
                  <FaHtml5 className="tools-letters" />
                  <p className="tools-letters">HTML 5</p>
                </div>
                <div className="frontend-horiz-align">
                  <FaCss3Alt className="tools-letters" />
                  <p className="tools-letters">CSS 3</p>
                </div>
                <div className="frontend-horiz-align">
                  <FaNodeJs className="tools-letters" />
                  <p className="tools-letters">Node.js</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 1.5, duration: 0.9 }}
            >
              <p className="medium-title to-right to-alt">Backend</p>
              <div className="backend-card ">
                <div className="backend-horiz-align">
                  <p className="tools-letters">Express.js</p>
                  <SiExpress className="tools-letters" />
                </div>
                <div className="backend-horiz-align">
                  <p className="tools-letters">MongoDB</p>
                  <SiMongodb className="tools-letters" />
                </div>
                <div className="backend-horiz-align">
                  <p className="tools-letters">Postman</p>
                  <SiPostman className="tools-letters" />
                </div>
                <div className="backend-horiz-align">
                  <p className="tools-letters">Node.js</p>
                  <FaNodeJs className="tools-letters" />
                </div>
              </div>
            </motion.div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <div>
              <p className="big-title to-light">Degrees</p>
              <svg className="underline">
                <line x1="0" y1="1" x2="100%" y2="1" />
              </svg>
            </div>
            <motion.div
              className="to-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <img src={ihLogo} alt="ihLogo" className="degree-logo" />
              <p className="degree-titles">Full Stack Web Developer</p>
              <p className="degree-place">Ironhack - BCN</p>
            </motion.div>
            <motion.div
              className="to-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <img src={EvolisLogo} alt="EvolisLogo" className="degree-logo" />
              <p className="degree-titles">3D ArchViz</p>
              <p className="degree-place">Evolis3D - BCN</p>
            </motion.div>
            <motion.div
              className="to-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <img
                src={lasalleLogo}
                alt="lasalleLogo"
                className="laSalle-logo"
              />
              <p className="degree-titles">
                Int. Architecture Construction Manager
              </p>
              <p className="degree-place">La Salle - BCN</p>
            </motion.div>
            <motion.div
              className="to-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <img src={ucvLogo} alt="ucvLogo" className="degree-logo" />
              <p className="degree-titles">Architect</p>
              <p className="degree-place">Universidad Central de Vzla. - CCS</p>
              <br className="separation"></br>
            </motion.div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

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
    </div>
  );
}
