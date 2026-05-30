import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GitHubShowcase from './sections/GitHubShowcase';
import ExperienceEducation from './sections/ExperienceEducation';
import Interests from './sections/Interests';
import Contact from './sections/Contact';

// Theme Context
export const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });
export const useTheme = () => useContext(ThemeContext);

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(() => {
    // Persist theme across sessions
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  // Apply theme to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Scroll Progress Bar */}
        <div className="scroll-progress-container">
          <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
        </div>

        {/* Navigation */}
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

        {/* Footer */}
        <footer
          style={{
            background: 'var(--footer-bg)',
            padding: '2.5rem 1.5rem',
            borderTop: '1px solid var(--footer-border)',
            textAlign: 'center',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
            transition: 'background 0.4s ease'
          }}
        >
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ color: 'var(--text-muted)' }}>
              &copy; {new Date().getFullYear()} <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Suraj Raut</span>. All Rights Reserved.
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', opacity: 0.6 }}>
              Full Stack Web Developer &bull; surajraut88.com.np
            </div>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
