import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Main from "./views/Main";
import ErrorPage from "./views/ErrorPage";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
