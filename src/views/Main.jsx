import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Contact from "./Contact";

export default function Main() {
  return (
    <div className="main">
      <Home />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}
