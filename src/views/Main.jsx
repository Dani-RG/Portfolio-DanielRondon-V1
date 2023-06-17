import React from "react";
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

export default function Main() {
  return (
    <div className="main">
      <div className="home_view" id="home">
        <div className="home_text">
          <div className="danielrondon_text">
            <p>DANIEL</p>
            <p>RONDON</p>
          </div>
          <div className="fullstack_webdev_text big_title">
            Full Stack Web Developer
          </div>
          <svg className="underline">
            <line x1="0" y1="1" x2="100%" y2="1" />
          </svg>
        </div>
      </div>

      <div className="about_view" id="about">
        <p className="big_title">ABOUT</p>
        <svg className="underline">
          <line x1="0" y1="1" x2="100%" y2="1" />
        </svg>
        <div className="about_set">
          <div className="about_text">
            <p className="texts_letters_02">
              From a professional background in architecture and 3D visualization,
              I have now become a web developer.
            </p>
            <p className="texts_letters_02">
              I possess valuable skills that can benefit your company.
            </p>
          </div>
          <div className="about_photo_phrase">
            <div className="circle_container">
              <img src={danielPhoto} alt="danielPhoto" />
            </div>
            <RiDoubleQuotesL className="quotes" />
            <p className="texts_letters_01">
            Clean design and functionality are the driving forces behind my creative mind.
            </p>
          </div>
        </div>
      </div>
      <div className="projects_view" id="projects">
        <p className="big_title">PROJECTS</p>
        <svg className="underline">
          <line x1="0" y1="1" x2="100%" y2="1" />
        </svg>
        <div className="one_project">
          <div className="project_header">
            <p className="medium_title">Nature Heroes</p>
            <a href="https://nature-heroes.netlify.app/" className="launch_btn">
              <MdOutlineLaunch />
            </a>
          </div>
          <p className="texts_letters_01">
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
            <p className="medium_title">MarkGet</p>
            <a href="https://markget.fly.dev/" className="launch_btn">
              <MdOutlineLaunch />
            </a>
          </div>
          <p className="texts_letters_01">
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
            <p className="medium_title">At 18:36!</p>
            <a
              href="https://dani-rg.github.io/Project-1_Game_At-18.34/"
              className="launch_btn"
            >
              <MdOutlineLaunch />
            </a>
          </div>
          <p className="texts_letters_01">
            A Javascript videogame with HTML Canvas.
          </p>
          <div className="mockups_set">
            <img src={atPic00} alt="atPic00" className="ipad_mockup" />
            <img src={atPic01} alt="atPic01" className="ipad_mockup" />
          </div>
        </div>
      </div>
      <div className="techStack_view" id="techStack">
        <p className="big_title">TECH STACK</p>
        <svg className="underline">
          <line x1="0" y1="1" x2="100%" y2="1" />
        </svg>
        <div className="tech_cards">
          <div>
            <p
              className="medium_title
          "
            >
              Frontend
            </p>
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
          </div>

          <div>
            <p className="medium_title to_right">Backend</p>
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
          </div>
        </div>
        <div>
          <div>
            <p className="big_title">DEGREES</p>
            <svg className="underline">
              <line x1="0" y1="1" x2="100%" y2="1" />
            </svg>
          </div>
          <div className="to_center">
            <img src={ihLogo} alt="ihLogo" className="degree_logo" />
            <p className="medium_title">Full Stack Web Developer</p>
            <p className="texts_letters_01">Ironhack - BCN</p>
          </div>
          <div className="to_center">
            <img src={EvolisLogo} alt="EvolisLogo" className="degree_logo" />
            <p className="medium_title">3D ArchViz</p>
            <p className="texts_letters_01">Evolis3D - BCN</p>
          </div>
          <div className="to_center">
            <img src={lasalleLogo} alt="lasalleLogo" className="laSalle_logo" />
            <p className="medium_title">
              Int. Architecture Construction Manager
            </p>
            <p className="texts_letters_01">La Salle - BCN</p>
          </div>
          <div className="to_center">
            <img src={ucvLogo} alt="ucvLogo" className="degree_logo" />
            <p className="medium_title">Architect</p>
            <p className="texts_letters_01">
              Universidad Central de Vzla. - CCS
            </p>
          </div>
        </div>
      </div>

      <div className="contact_view" id="contact">
        <p className="big_title left" id="lets_get">
          Let’s get in touch!
        </p>
        <svg className="underline">
          <line x1="0" y1="1" x2="100%" y2="1" />
        </svg>
        <div className="contact_set">
          <div className="contact_logos">
            <Link
              to="https://www.linkedin.com/in/daniel-rondon-garcia-"
              target="_blank"
            >
              <TiSocialLinkedinCircular id="in_logo" />
            </Link>
            <Link to="https://github.com/Dani-RG" target="_blank">
              <VscGithub />
            </Link>
            <Link to="mailto:daniel.deweb@gmail.com">
              <LuAtSign />
            </Link>
          </div>
          <ContactForm />
          <a
            href="CV WebDev Daniel Rondon Garcia.pdf"
            download="CV WebDev Daniel Rondon Garcia.pdf"
            className="resume_btn"
          >
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
}
