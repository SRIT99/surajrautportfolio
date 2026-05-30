import React, { useState, useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GitHubShowcase from './sections/GitHubShowcase';
import ExperienceEducation from './sections/ExperienceEducation';
import Interests from './sections/Interests';
import Contact from './sections/Contact';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Scroll Progress Bar at the top of viewport */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Navigation Menu */}
      <Navbar />

      {/* Layout Sections */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubShowcase />
        <ExperienceEducation />
        <Interests />
        <Contact />
      </main>

      {/* Professional Footer (No AI references) */}
      <footer
        style={{
          background: '#0B1220',
          padding: '2.5rem 1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.03)',
          textAlign: 'center',
          fontSize: '0.88rem',
          color: 'var(--text-muted)'
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div>
            &copy; {new Date().getFullYear()} <span style={{ color: '#fff', fontWeight: 600 }}>Suraj Raut</span>. All Rights Reserved.
          </div>
          <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.2)' }}>
            Full Stack Web Developer &bull; surajraut88.com.np
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
