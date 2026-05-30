import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    // Detect scroll for styling change
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Scroll spy logic using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe sections
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: scrolled ? '1rem' : '0',
        left: '0',
        right: '0',
        width: scrolled ? 'calc(100% - 2rem)' : '100%',
        maxWidth: scrolled ? '1200px' : '100%',
        margin: '0 auto',
        height: '4.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        zIndex: 5000,
        borderRadius: scrolled ? 'var(--border-radius-md)' : '0',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.03)',
        background: scrolled ? 'rgba(11, 18, 32, 0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => handleClick(e, '#hero')}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '-0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <span className="gradient-text">SURAJ</span>
        <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-muted)' }}>RAUT</span>
      </a>

      {/* Desktop Navigation Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            style={{
              fontSize: '0.95rem',
              fontWeight: 500,
              color: activeSection === link.href.slice(1) ? '#fff' : 'var(--text-muted)',
              position: 'relative',
              padding: '0.25rem 0'
            }}
            onMouseEnter={e => {
              if (activeSection !== link.href.slice(1)) e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              if (activeSection !== link.href.slice(1)) e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            {link.name}
            {activeSection === link.href.slice(1) && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0',
                  width: '100%',
                  height: '2px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '2px'
                }}
              />
            )}
          </a>
        ))}
      </div>

      {/* Action Button */}
      <div className="desktop-nav">
        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="btn btn-outline"
          style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
        >
          Hire Me
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Mobile Nav Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'none',
          background: 'transparent',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          padding: '0.25rem',
          zIndex: 6000
        }}
        className="mobile-trigger"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav Overlay Menu */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(11, 18, 32, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            padding: '2rem',
            zIndex: 5500
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: activeSection === link.href.slice(1) ? 'var(--primary)' : 'var(--text-muted)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="btn btn-primary"
            style={{ marginTop: '1rem', width: '200px' }}
          >
            Hire Me
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      {/* Responsive styling overrides */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-trigger {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
