import React, { useEffect, useState } from 'react';
import Navbar from '../sections/Navbar';
import Footer from './Footer';

const PageLayout = ({ children, title, description }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setScrollProgress((window.scrollY / total) * 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Update document title if provided
  useEffect(() => {
    if (title) document.title = title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && description) desc.setAttribute('content', description);
  }, [title, description]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Scroll progress */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <Navbar />

      <main
        style={{ flex: 1, paddingTop: '64px' }}
        className="page-enter"
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
