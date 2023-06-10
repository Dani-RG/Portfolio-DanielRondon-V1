import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Main from "./views/Main";
import ErrorPage from "./views/ErrorPage";
import NotFound from "./views/NotFound";
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
          <Route path="/" element={<Main />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
