import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import { createContext } from "react";

export const ThemeContext = createContext(null);

function App( props ) {

  const { theme } = props;
  /* const theme = 'light' */

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className="App" id={theme}>
        <Navbar />
        <SocialMedia />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        {console.log(theme)}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
