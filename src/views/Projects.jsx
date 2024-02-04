import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineLaunch } from "react-icons/md";
import nhPic00 from "../images/mockups/NH_iphone_mockup_00.png";
import nhPic01 from "../images/mockups/NH_iphone_mockup_01.png";
import nhPic02 from "../images/mockups/NH_iphone_mockup_02.png";
import nhPic04 from "../images/mockups/NH_iphone_mockup_04.png";
import nhPic06 from "../images/mockups/NH_iphone_mockup_06.png";
import mgPic01 from "../images/mockups/MG_iphone_mockup_01.png";
import mgPic02 from "../images/mockups/MG_iphone_mockup_02.png";
import atPic00 from "../images/mockups/AT_ipad_mockup_00.png";
import atPic01 from "../images/mockups/AT_ipad_mockup_01.png";
import jerry06 from "../images/mockups/jerry_mockup_06.png";
import jerry03 from "../images/mockups/jerry_mockup_03.png";
import jerry04 from "../images/mockups/jerry_mockup_04.png";
import jerry05 from "../images/mockups/jerry_mockup_05.png";
import r6Pic01 from "../images/mockups/r6-frontend-app-01.png";
import r6Pic02 from "../images/mockups/r6-frontend-app-02.png";
import r6Pic03 from "../images/mockups/r6-frontend-app-03.png";
import r6Pic04 from "../images/mockups/r6-frontend-app-04.png";

const NHmockupArr = [nhPic00, nhPic01, nhPic02, nhPic04, nhPic06];
const MGmockupArr = [mgPic01, mgPic02];
const ATmockupArr = [atPic00, atPic01];
const JerryMockupArr = [jerry06, jerry03, jerry04, jerry05];
const R6MockupArr = [r6Pic01, r6Pic02, r6Pic03, r6Pic04];

const allImages = [
  nhPic00,
  nhPic01,
  nhPic02,
  nhPic04,
  mgPic01,
  mgPic02,
  atPic00,
  atPic01,
  jerry06,
  jerry03,
  jerry04,
  jerry05,
  r6Pic01,
  r6Pic02,
  r6Pic03,
  r6Pic04,
];

export default function Projects() {
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
    <div className="projects-view" id="projects">
      {imagesLoaded && (
        <div className="section-container">
          <p className="big-title to-dark">Projects</p>
          <svg className="underline">
            <line x1="0" y1="1" x2="100%" y2="1" />
          </svg>
          <div className="one-project">
            <div className="project-header">
              <p className="medium-title">Jerry</p>
              <motion.div whileHover={{ scale: 1.3 }}>
                <Link
                  to="https://jerry-personal-finance-assistant.netlify.app/"
                  target="_blank"
                  className="launch-btn"
                >
                  <MdOutlineLaunch />
                </Link>
              </motion.div>
            </div>
            <p className="texts-letters-01">
              A Full Stack web application on TypeScript and React, about a
              Personal Finance Assistant, which helps to correctly record all
              the user's money movements. Powered by artificial intelligence by
              integrating OpenAI's Whisper converting the user's voice into text
              to record the messages.
            </p>
            <div className="mockups-container">
              <div className="mockups-set">
                {JerryMockupArr.map((image, index) => {
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
          </div>
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
              A React.js Full Stack web application that raises awareness and
              promotes the conservation of endangered animal species by
              providing information about their status and habitat. It offers
              users a direct Stripe payment gateway to make donations to their
              preferred foundation.
            </p>
            <div className="mockups-container">
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
          </div>

          <div className="one-project">
            <div className="project-header">
              <p className="medium-title">R6</p>
              <motion.div whileHover={{ scale: 1.3 }}>
                <Link
                  to="https://github.com/Dani-RG/r6_react-redux-frontend-app"
                  target="_blank"
                  className="launch-btn"
                >
                  <MdOutlineLaunch />
                </Link>
              </motion.div>
            </div>
            <p className="texts-letters-01">
              A Front End web application, built with React.js, handling states
              using Redux and Saga, user authentication through social login,
              consuming external APIs, handling requests with Axios, using
              Styled Components and featuring responsive design. Implementation
              of tests with RTL React Testing Library and Jest.
            </p>
            <div className="mockups-container">
              <div className="mockups-set">
                {R6MockupArr.map((image, index) => {
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
            <div className="mockups-container">
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
          </div>

          <div className="one-project">
            <div className="project-header">
              <p className="medium-title">At 18:34!</p>
              <motion.div whileHover={{ scale: 1.3 }}>
                <Link
                  to="https://dani-rg.github.io/Project-1_Game_At-18.34/"
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
            <div className="mockups-container">
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
