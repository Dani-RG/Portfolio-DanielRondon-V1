import React, { lazy, Suspense } from "react";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Projects = React.lazy(() => import("./Projects"));
const TechStack = React.lazy(() => import("./TechStack"));
const Contact = React.lazy(() => import("./Contact"));

export default function Main() {
  return (
    <div className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </Suspense>
    </div>
  );
}
