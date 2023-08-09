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
      <div className="home_view" id="home">
        <div className="home_text">
          <div className="danielrondon_text">
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
            <div className="fullstack_webdev_text big_title">
              Full Stack Web Developer
            </div>
            <svg className="underline_alt_color">
              <line x1="0" y1="1" x2="100%" y2="1" />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="about_view" id="about">
        <div className="section_container">
          <p className="big_title to_light">About</p>
          <svg className="underline">
            <line x1="0" y1="1" x2="100%" y2="1" />
          </svg>
          <div className="about_set">
            <div className="about_text">
              <p className="texts_letters_02">
                With a professional background in architecture and 3D
                visualization, I have now become a full-stack web developer.
              </p>
              <p className="texts_letters_02">
                Knowing how to integrate the frontend with the backend to bring
                to life designs and applications that are both interesting and
                emotionally engaging.
              </p>
              <p className="texts_letters_02">
                My goal is to create experiences that are not only enjoyable but
                also direct users towards the essential point of the journey.
              </p>
            </div>
            <div className="about_photo_phrase">
              <div className="circle_container">
                <img src={danielPhoto} alt="danielPhoto" />
              </div>
              <div className="quote_phrase">
                <RiDoubleQuotesL className="quotes" />
                <p className="texts_letters_01 to_light to_italic">
                  My creative mind is driven by organized processes and
                  prioritizing effective functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials_btn">
          <button onClick={() => setIsOpen(true)}>
            Testimonials
          </button>
          <TestimonialsModal open={isOpen} onClose={() => setIsOpen(false)}>
            <Carousel />
          </TestimonialsModal>
        </div>
      </div>
      <div className="projects_view" id="projects">
        <div className="section_container">
          <p className="big_title to_dark">Projects</p>
          <svg className="underline">
            <line x1="0" y1="1" x2="100%" y2="1" />
          </svg>
          <div className="one_project">
            <div className="project_header">
              <p className="medium_title">Nature Heroes</p>
              <motion.div whileHover={{ scale: 1.3 }}>
                <Link
                  to="https://nature-heroes.netlify.app/"
                  target="_blank"
                  className="launch_btn"
                >
                  <MdOutlineLaunch />
                </Link>
              </motion.div>
            </div>
            <p className="texts_letters_01">
              A React.js Full Stack Web App that promotes animal conservation
              awareness.
            </p>
            <div className="mockups_set">
              {NHmockupArr.map((image, index) => {
                return (
                  <img
                    src={image}
                    alt={index}
                    key={index}
                    className="iphone_mockup"
                  />
                );
              })}
            </div>
          </div>

          <div className="one_project">
            <div className="project_header">
              <p className="medium_title">MarkGet</p>
              <motion.div whileHover={{ scale: 1.3 }}>
                <Link
                  to="https://markget.fly.dev/"
                  target="_blank"
                  className="launch_btn"
                >
                  <MdOutlineLaunch />
                </Link>
              </motion.div>
            </div>
            <p className="texts_letters_01">
              An Express.js Full Stack Web App that compares the prices of
              supermarket products.
            </p>
            <div className="mockups_set">
              {MGmockupArr.map((image, index) => {
                return (
                  <img
                    src={image}
                    alt={index}
                    key={index}
                    className="iphone_mockup"
                  />
                );
              })}
            </div>
          </div>

          <div className="one_project">
            <div className="project_header">
              <p className="medium_title">At 18:36!</p>
              <motion.div whileHover={{ scale: 1.3 }}>
                <Link
                  to="https://dani-rg.github.io/Project-1_Game_At-18.34/"
                  target="_blank"
                  className="launch_btn"
                >
                  <MdOutlineLaunch />
                </Link>
              </motion.div>
            </div>
            <p className="texts_letters_01">
              A Javascript videogame with HTML Canvas.
            </p>
            <div className="mockups_set">
              {ATmockupArr.map((image, index) => {
                return (
                  <img
                    src={image}
                    alt={index}
                    key={index}
                    className="ipad_mockup"
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
      <div className="techStack_view" id="techStack">
        <div className="section_container">
          <p className="big_title to_light">Tech Stack</p>
          <svg className="underline">
            <line x1="0" y1="1" x2="100%" y2="1" />
          </svg>
          <div className="tech_cards">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 1, duration: 0.9 }}
            >
              <p className="medium_title to_alt">Frontend</p>
              <div className="frontend_card">
                <div className="frontend_horiz_align">
                  <FaReact className="tools_letters" />
                  <p className="tools_letters">React</p>
                </div>
                <div className="frontend_horiz_align">
                  <IoLogoJavascript className="tools_letters" />
                  <p className="tools_letters">Javascript (ES6)</p>
                </div>
                <div className="frontend_horiz_align">
                  <FaHtml5 className="tools_letters" />
                  <p className="tools_letters">HTML 5</p>
                </div>
                <div className="frontend_horiz_align">
                  <FaCss3Alt className="tools_letters" />
                  <p className="tools_letters">CSS 3</p>
                </div>
                <div className="frontend_horiz_align">
                  <FaNodeJs className="tools_letters" />
                  <p className="tools_letters">Node.js</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 1.5, duration: 0.9 }}
            >
              <p className="medium_title to_right to_alt">Backend</p>
              <div className="backend_card ">
                <div className="backend_horiz_align">
                  <p className="tools_letters">Express.js</p>
                  <SiExpress className="tools_letters" />
                </div>
                <div className="backend_horiz_align">
                  <p className="tools_letters">MongoDB</p>
                  <SiMongodb className="tools_letters" />
                </div>
                <div className="backend_horiz_align">
                  <p className="tools_letters">Postman</p>
                  <SiPostman className="tools_letters" />
                </div>
                <div className="backend_horiz_align">
                  <p className="tools_letters">Node.js</p>
                  <FaNodeJs className="tools_letters" />
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
              <p className="big_title to_light">Degrees</p>
              <svg className="underline">
                <line x1="0" y1="1" x2="100%" y2="1" />
              </svg>
            </div>
            <motion.div
              className="to_center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <img src={ihLogo} alt="ihLogo" className="degree_logo" />
              <p className="degree_titles">Full Stack Web Developer</p>
              <p className="degree_place">Ironhack - BCN</p>
            </motion.div>
            <motion.div
              className="to_center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <img src={EvolisLogo} alt="EvolisLogo" className="degree_logo" />
              <p className="degree_titles">3D ArchViz</p>
              <p className="degree_place">Evolis3D - BCN</p>
            </motion.div>
            <motion.div
              className="to_center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <img
                src={lasalleLogo}
                alt="lasalleLogo"
                className="laSalle_logo"
              />
              <p className="degree_titles">
                Int. Architecture Construction Manager
              </p>
              <p className="degree_place">La Salle - BCN</p>
            </motion.div>
            <motion.div
              className="to_center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <img src={ucvLogo} alt="ucvLogo" className="degree_logo" />
              <p className="degree_titles">Architect</p>
              <p className="degree_place">Universidad Central de Vzla. - CCS</p>
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

      <div className="contact_view" id="contact">
        <div className="section_container">
          <p className="big_title to_left to_dark" id="lets_get">
            Let’s get in touch!
          </p>
          <svg className="underline">
            <line x1="0" y1="1" x2="100%" y2="1" />
          </svg>
          <div className="contact_set">
            <div className="contact_logos">
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
                  <TiSocialLinkedinCircular id="in_logo" />
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
              className="resume_btn"
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
