import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

const allImages = [ihLogo, EvolisLogo, lasalleLogo, ucvLogo];

export default function TechStack() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedImages = 0;

    const loadImage = () => {
      loadedImages++;
      if (loadedImages === allImages.length) {
        setImagesLoaded(true);
      }
    };

    allImages.forEach((url) => {
      const image = new Image();
      image.src = url;
      image.onload = loadImage;
    });
  }, []);

  return (
    <div className="techStack-view" id="techStack">
      {imagesLoaded && (
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
      )}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
