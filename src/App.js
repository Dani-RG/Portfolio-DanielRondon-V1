import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className="App" id={theme}>
        <Navbar handleTheme={(theme) => setTheme(theme)} />
        <SocialMedia />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
