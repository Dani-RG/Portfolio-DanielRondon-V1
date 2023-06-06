import React, { useState } from "react"
import { NavLink } from "react-router-dom"
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
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <button className="menu_burger_icon" onClick={() => setBurger(!burger)}>
        {burger ? <RxCross2 /> : <FiMenu />}
        </button>

      </nav>
  )
}
