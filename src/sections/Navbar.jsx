import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../App';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

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

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLight = theme === 'light';
  const textColor = isLight ? '#0F172A' : '#fff';
  const mutedColor = isLight ? '#475569' : 'var(--text-muted)';

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
        padding: '0 1.5rem',
        zIndex: 5000,
        borderRadius: scrolled ? 'var(--border-radius-md)' : '0',
        borderBottom: scrolled
          ? `1px solid var(--border-color)`
          : `1px solid transparent`,
        background: scrolled ? 'var(--nav-scrolled-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => handleClick(e, '#hero')}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          fontWeight: 800,
          color: textColor,
          letterSpacing: '-0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          flexShrink: 0
        }}
      >
        <span className="gradient-text">SURAJ</span>
        <span style={{ fontSize: '0.9rem', fontWeight: 500, color: mutedColor }}>RAUT</span>
      </a>

      {/* Desktop Navigation Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            style={{
              fontSize: '0.92rem',
              fontWeight: 500,
              color: activeSection === link.href.slice(1) ? textColor : mutedColor,
              position: 'relative',
              padding: '0.25rem 0'
            }}
            onMouseEnter={e => {
              if (activeSection !== link.href.slice(1)) e.currentTarget.style.color = textColor;
            }}
            onMouseLeave={e => {
              if (activeSection !== link.href.slice(1)) e.currentTarget.style.color = mutedColor;
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

      {/* Right side: Theme toggle + Hire Me */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="desktop-nav">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          aria-label="Toggle theme"
        >
          {isLight ? <Moon size={17} /> : <Sun size={17} />}
        </button>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="btn btn-outline"
          style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}
        >
          Hire Me
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Mobile: Theme Toggle + Hamburger */}
      <div style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }} className="mobile-controls">
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          {isLight ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: textColor,
            cursor: 'pointer',
            padding: '0.25rem',
            zIndex: 6000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay Menu */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--nav-mobile-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.75rem',
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
                color: activeSection === link.href.slice(1) ? 'var(--primary)' : mutedColor,
                transition: 'color 0.2s'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="btn btn-primary"
            style={{ marginTop: '1rem', width: '200px', justifyContent: 'center' }}
          >
            Hire Me
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-controls {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
