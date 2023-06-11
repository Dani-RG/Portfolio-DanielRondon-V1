import React from "react";
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

export default function Main() {
  return (
    <div className="main">
      <div className="home_view" id="home">
        <div className="home_text">
          <div className="danielrondon_text">
            <p>DANIEL</p>
            <p>RONDON</p>
          </div>
          <div className="fullstack_webdev_text">FullStackWebDeveloper</div>
        </div>
      </div>

      <div className="about_view" id="about">
        <div className="about_text">
          <p className="about_fromA">
            From a professional background in architecture and 3D visualization,
            I have now become a web developer.
          </p>
          <p className="about_IPoss">
            I possess valuable skills that can benefit your company.
          </p>
        </div>
        <div className="about_photoText">
          <div className="circle_container">
            <img src={danielPhoto} alt="danielPhoto" />
          </div>
          <p className="about_cleanDes">
            “Clean design and functionality are the driving forces behind my
            creative mind.”
          </p>
        </div>
      </div>
      <div className="projects_view" id="projects">
        <p className="projects_letters">PROJECTS</p>

        <div className="one_project">
          <div className="project_header">
            <p className="project_title">Nature Heroes</p>
            <a href="https://nature-heroes.netlify.app/" className="launch_btn">
              <MdOutlineLaunch />
            </a>
          </div>
          <p className="project_info">
            A React.js Full Stack Web App that promotes animal conservation
            awareness.
          </p>
          <div className="mockups_set">
            <img src={nhPic00} alt="nhPic00" className="iphone_mockup" />
            <img src={nhPic01} alt="nhPic01" className="iphone_mockup" />
            <img src={nhPic02} alt="nhPic02" className="iphone_mockup" />
            <img src={nhPic04} alt="nhPic04" className="iphone_mockup" />
          </div>
        </div>

        <div className="one_project">
          <div className="project_header">
            <p className="project_title">MarkGet</p>
            <a href="https://markget.fly.dev/" className="launch_btn">
              <MdOutlineLaunch />
            </a>
          </div>
          <p className="project_info">
          An Express.js Full Stack Web App that compares the prices of
            supermarket products.
          </p>
          <div className="mockups_set">
            <img src={mgPic01} alt="mgPic01" className="iphone_mockup" />
            <img src={mgPic02} alt="mgPic02" className="iphone_mockup" />
          </div>
        </div>

        <div className="one_project">
          <div className="project_header">
            <p className="project_title">At 18:36!</p>
            <a href="https://dani-rg.github.io/Project-1_Game_At-18.34/" className="launch_btn">
              <MdOutlineLaunch />
            </a>
          </div>
          <p className="project_info">
          A Javascript videogame with HTML Canvas.
          </p>
          <div className="mockups_set">
            <img src={atPic00} alt="atPic00" className="ipad_mockup" />
            <img src={atPic01} alt="atPic01" className="ipad_mockup" />
          </div>
        </div>
      </div>
    </div>
  );
}
