import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { SlArrowUp } from "react-icons/sl";
import BurgerBtn from "./BurgerBtn";

export default function Navbar() {

  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(!clicked);
  }

  const closeLinks = () => {
    setClicked(false);
  }

  return (
    <>
      <NavContainer>
        <div>
          <Link to="home" className="upArrow_icon">
            <SlArrowUp />
          </Link>
        </div>
        <div className={`links ${clicked ? "active" : ""}`}>
          <Link to="home" onClick={closeLinks}>Home</Link>
          <Link to="about" onClick={closeLinks}>About</Link>
          <Link to="projects" onClick={closeLinks}>Projects</Link>
          <Link to="techStack" onClick={closeLinks}>Tech Stack</Link>
          <Link to="contact" onClick={closeLinks}>Contact</Link>
        </div>
        <div className="burger_icon">
          <BurgerBtn clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  width: 90vw;
  right: 5%;
  border-bottom: 0.1rem solid var(--bright-color);
  z-index: 5;
  font-family: var(--montserrat-font-family);

  a {
    cursor: pointer;
    margin: 0 1rem;
  }

  .upArrow_icon {
    cursor: pointer;
    z-index: 10;
    font-size: 1.2rem;
  }

  .burger_icon {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .links {
    position: absolute;
    z-index: 4;
    top: -700px;  
    margin: 0 auto;
    text-align: center;
    a {
      font-size: 1.3rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1.3rem;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin: 0 auto;
    top: 300%;
    left: 0;
    right: 0;
    text-align: center;
    transition: all .5s ease;
    a {
      margin-top: 2rem;
    }
  }
`;

const BgDiv = styled.div`
background-color: #0D203F;
position: absolute;
top: -700px;
${'' /* width: 100%; */}
${'' /* height: 100%; */}
z-index: 3;
transition: all .5s ease;
&.active {
  top: 0;
  left: -10%;
  width: 120%;
  height: 100vh;
}
`
