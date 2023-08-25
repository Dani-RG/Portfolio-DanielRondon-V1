import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineLaunch } from "react-icons/md";
import nhPic00 from "../images/mockups/NH_iphone_mockup_00.png";
import nhPic01 from "../images/mockups/NH_iphone_mockup_01.png";
import nhPic02 from "../images/mockups/NH_iphone_mockup_02.png";
import nhPic04 from "../images/mockups/NH_iphone_mockup_04.png";
import mgPic01 from "../images/mockups/MG_iphone_mockup_01.png";
import mgPic02 from "../images/mockups/MG_iphone_mockup_02.png";
import atPic00 from "../images/mockups/AT_ipad_mockup_00.png";
import atPic01 from "../images/mockups/AT_ipad_mockup_01.png";

const NHmockupArr = [nhPic00, nhPic01, nhPic02, nhPic04];
const MGmockupArr = [mgPic01, mgPic02];
const ATmockupArr = [atPic00, atPic01];

const allImages = [
  nhPic00,
  nhPic01,
  nhPic02,
  nhPic04,
  mgPic01,
  mgPic02,
  atPic00,
  atPic01,
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
      )}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
