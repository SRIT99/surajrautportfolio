import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home'
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App;
