import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import Projects from './views/Projects';
import Skills from './views/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
