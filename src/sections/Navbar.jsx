import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About',      to: '/about' },
    { name: 'Skills',     to: '/skills' },
    { name: 'Projects',   to: '/projects' },
    { name: 'Experience', to: '/experience' },
    { name: 'Contact',    to: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Close mobile on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo" aria-label="Go home">
            Suraj<span>.</span>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links" role="list">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="desktop-only">
            <a
              href="/CVsurajraut.pdf"
              download="Suraj_Raut_CV.pdf"
              className="btn btn-ghost"
              style={{ padding: '0.5rem 1.1rem', fontSize: '0.86rem', gap: '0.4rem' }}
            >
              <Download size={14} />
              Resume
            </a>
            <NavLink to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.86rem' }}>
              Hire Me
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-only hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(13,13,13,0.98)',
          backdropFilter: 'blur(12px)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          padding: '5.5rem 2rem 3rem',
          gap: '0.5rem'
        }}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                fontSize: '1.6rem',
                fontFamily: 'var(--font-display)',
                color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--bg-border)',
                transition: 'color 0.2s'
              })}
            >
              {link.name}
            </NavLink>
          ))}

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <a
              href="/CVsurajraut.pdf"
              download="Suraj_Raut_CV.pdf"
              className="btn btn-ghost"
            >
              <Download size={15} />
              Resume
            </a>
            <NavLink to="/contact" className="btn btn-primary">
              Hire Me
            </NavLink>
          </div>
        </div>
      )}

      <style>{`
        .desktop-only { display: flex; }
        .mobile-only  { display: none; }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only  { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
