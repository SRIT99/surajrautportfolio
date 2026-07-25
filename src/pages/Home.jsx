import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Home = () => {
  return (
    <PageLayout
      title="Suraj Raut | Frontend Developer — Damak, Jhapa, Nepal"
      description="Suraj Raut is a frontend-focused web developer from Damak, Jhapa, Nepal. Specializing in React.js, HTML, CSS, Tailwind CSS, and JavaScript."
    >
      {/* ── HERO ─────────────────────────────── */}
      <section style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', background: 'var(--bg)', borderBottom: '1px solid var(--bg-border)' }}>
        <div className="container" style={{ width: '100%' }}>
          <div className="hero-grid">

            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Location badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '2rem', border: '1px solid var(--bg-border)', borderRadius: '9999px', padding: '0.3rem 0.8rem' }}>
                <MapPin size={12} style={{ color: 'var(--accent)' }} />
                Damak, Jhapa · Nepal
              </div>

              <h1 style={{ marginBottom: '0.5rem', lineHeight: 1.1 }}>
                Suraj Raut.
              </h1>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
                fontWeight: 400,
                color: 'var(--text-muted)',
                marginBottom: '1.75rem',
                lineHeight: 1.25
              }}>
                Frontend Developer,<br />
                <span style={{ color: 'var(--text-secondary)' }}>learning the full stack.</span>
              </h2>

              <p style={{ fontSize: '1.05rem', maxWidth: '500px', marginBottom: '2.5rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                I build interfaces that feel clean and intentional — using React, HTML, CSS, Tailwind CSS and JavaScript. Currently a BSc CSIT student at Central Campus of Technology, Dharan.
              </p>

              {/* CTA Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
                <Link to="/projects" className="btn btn-primary" style={{ gap: '0.5rem' }}>
                  View my work
                  <ArrowRight size={15} />
                </Link>
                <a href="/CVsurajraut.pdf" download="Suraj_Raut_CV.pdf" className="btn btn-ghost" style={{ gap: '0.5rem' }}>
                  <Download size={15} />
                  Download CV
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Let's talk
                </Link>
              </div>

              {/* Quick stats */}
              <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3.5rem', flexWrap: 'wrap' }}>
                {[
                  { num: '2+', label: 'Projects built' },
                  { num: '8th', label: 'Sem, BSc CSIT' },
                  { num: 'Open', label: 'To internships' },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--text-primary)', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="hero-photo-wrap"
            >
              <div className="hero-photo-frame">
                <img
                  src="/suraj-raut.jpg"
                  alt="Suraj Raut, Frontend Developer in Damak, Jhapa, Nepal"
                  title="Suraj Raut — Web Developer in Damak, Nepal"
                  width="400"
                  height="500"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  itemProp="image"
                />
                {/* Amber corner accent */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  width: '60px',
                  height: '60px',
                  borderTop: '3px solid var(--accent)',
                  borderRight: '3px solid var(--accent)',
                  borderRadius: '0 var(--radius-sm) 0 0',
                  zIndex: 2
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '-10px',
                  width: '60px',
                  height: '60px',
                  borderBottom: '3px solid var(--accent)',
                  borderLeft: '3px solid var(--accent)',
                  borderRadius: '0 0 0 var(--radius-sm)',
                  zIndex: 2
                }} />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '-2rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 3
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse-dot 2s infinite' }} />
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Open to work</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TECH STRIP ───────────────────────── */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--bg-border)', background: 'var(--bg-surface)' }}>
        <div className="container">
          <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Technologies I work with
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.65rem' }}>
            {['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Context API', 'Redux (learning)', 'Node.js', 'Express.js', 'PostgreSQL', 'Git & GitHub'].map(tech => (
              <span key={tech} className="chip chip-familiar" style={{ fontSize: '0.84rem' }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '620px' }}>
          <div className="label" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>Looking for a developer?</div>
          <h2 style={{ marginBottom: '1rem' }}>Let's build something together.</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            I'm available for frontend internships and freelance projects. Based in Damak, Jhapa — open to remote work across Nepal and internationally.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Get in touch</Link>
            <Link to="/projects" className="btn btn-ghost">See my work</Link>
          </div>
        </div>
      </section>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4rem;
          align-items: center;
          padding: 5rem 0;
          min-height: calc(100vh - 64px);
        }
        .hero-photo-wrap {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .hero-photo-frame {
          position: relative;
          width: 340px;
          height: 420px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--bg-border);
          background: var(--bg-surface);
          flex-shrink: 0;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding: 4rem 0;
          }
          .hero-photo-wrap { order: -1; }
          .hero-photo-frame { width: 260px; height: 320px; }
        }
        @media (max-width: 480px) {
          .hero-photo-frame { width: 220px; height: 270px; }
        }
      `}</style>
    </PageLayout>
  );
};

export default Home;
