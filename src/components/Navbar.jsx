import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { SlArrowUp } from "react-icons/sl";

export default function Navbar() {

  const [burger, setBurger] = useState(false);

  return (
      <nav className="navbar">

        <Link to="home" className="upArrow_icon">
          <SlArrowUp />
        </Link>

        <ul className={burger ? "nav_links_mobile" : "nav_links"} onClick={() => setBurger(false)}>
          <li><Link to="home" className="desk_link">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="projects">Projects</Link></li>
          <li><Link to="techStack">Tech Stack</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>

        <button className="menu_burger_icon" onClick={() => setBurger(!burger)}>
        {burger ? <RxCross2 /> : <FiMenu />}
        </button>

      </nav>
  )
}
