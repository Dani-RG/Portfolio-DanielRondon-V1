import React from "react";
import danielPhoto from "../images/danielRG_photo_noBG.png";
import { ReactComponent as NatureHeroesMockUp } from "../images/natureHeroesSVG.svg";
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
        <p className="projects_title">PROJECTS</p>
        <NatureHeroesMockUp className="nature_heroes_mockup" />
        <div>
          <div className="nature_heroes_header">
            <p className="nature_heroes_title">Nature Heroes</p>
            <a href="https://nature-heroes.netlify.app/">
            <MdOutlineLaunch /></a>
          </div>
          <p className="nature_heroes_info">
            A React.js Full Stack Web App that promotes animal conservation
            awareness.
          </p>
        </div>
      </div>
    </div>
  );
}
