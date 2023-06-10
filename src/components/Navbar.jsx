import React, { useState } from "react"
import { Link } from "react-scroll"
import { FiMenu } from "react-icons/fi"
import { RxCross2 } from "react-icons/rx"
import { CgDarkMode } from "react-icons/cg"

export default function Navbar( props ) {

  const [burger, setBurger] = useState(false);
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    props.handleTheme(theme);
  };

  return (
      <nav className="navbar">

        <button className="theme_icon" onClick={() => toggleTheme()}> <CgDarkMode /> </button>

        <ul className={burger ? "nav_links_mobile" : "nav_links"} onClick={() => setBurger(false)}>
          <li><Link to="home">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="projects">Projects</Link></li>
          <li><Link to="skills">Skills</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>

        <button className="menu_burger_icon" onClick={() => setBurger(!burger)}>
        {burger ? <RxCross2 /> : <FiMenu />}
        </button>

      </nav>
  )
}
