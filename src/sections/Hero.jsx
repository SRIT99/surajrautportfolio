import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Send, Globe, Database, Cpu, Layers } from 'lucide-react';
import CanvasParticles from '../components/CanvasParticles';
import AnimatedText from '../components/AnimatedText';

const Hero = () => {
  const roles = [
    'PERN Stack Developer',
    'React Developer',
    'Backend Developer',
    'Problem Solver'
  ];

  const floatingIcons = [
    { Icon: Cpu, color: '#10B981', top: '15%', left: '5%', delay: 0 },
    { Icon: Database, color: '#3B82F6', top: '25%', right: '5%', delay: 1.5 },
    { Icon: Layers, color: '#22C55E', bottom: '20%', left: '5%', delay: 0.8 },
    { Icon: Globe, color: '#10B981', bottom: '30%', right: '5%', delay: 2.2 },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7.5rem 1.5rem 4rem 1.5rem',
        overflow: 'hidden',
        background: 'var(--section-dark)'
      }}
    >
      {/* Background Particles Canvas */}
      <CanvasParticles />

      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(128, 128, 128, 0.06) 1px, transparent 0)',
          backgroundSize: '24px 24px',
          opacity: 0.8,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Hero Content Container */}
      <div
        className="container hero-container"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center',
          width: '100%'
        }}
      >
        {/* Left Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="hero-text-area"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
        >
          {/* Availability Badge */}
          <div
            className="badge badge-pulse"
            style={{
              marginBottom: '1.25rem',
              background: 'rgba(16, 185, 129, 0.08)',
              borderColor: 'rgba(16, 185, 129, 0.15)',
              color: 'var(--primary)',
              fontSize: '0.82rem',
              fontWeight: 500
            }}
          >
            Open to Internships &amp; Freelance Work
          </div>

          {/* Headline Name */}
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '0.5rem'
            }}
          >
            SURAJ RAUT
          </h1>

          {/* Subheadline Typing Role */}
          <h2
            style={{
              fontSize: 'clamp(1.15rem, 2.5vw, 2.25rem)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              color: 'var(--text-muted)',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
              minHeight: '1.6em'
            }}
          >
            I am a <AnimatedText texts={roles} />
          </h2>

          {/* Tagline text */}
          <p
            style={{
              fontSize: 'clamp(0.92rem, 1.1vw, 1.1rem)',
              lineHeight: '1.7',
              color: 'var(--text-muted)',
              maxWidth: '520px',
              marginBottom: '2rem'
            }}
          >
            Building modern, scalable, and user-focused web applications using PostgreSQL, Express.js, React.js, and Node.js.
          </p>

          {/* CTA Buttons Row */}
          <div className="hero-cta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary"
            >
              View Projects
              <ArrowRight size={17} />
            </button>
            
            <a
              href="/CVsurajraut.pdf"
              download="Suraj_Raut_CV.pdf"
              className="btn btn-secondary"
            >
              <Download size={17} />
              Download Resume
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-outline"
            >
              <Send size={17} />
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Visual / Floating Tech Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          style={{
            position: 'relative',
            height: '380px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="hero-visual-panel"
        >
          {/* Glassmorphic visual bubble */}
          <div
            className="glass-panel"
            style={{
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              background: 'radial-gradient(circle, rgba(17,24,39,0.85) 0%, rgba(11,18,32,0.95) 100%)',
              borderColor: 'rgba(255, 255, 255, 0.08)',
              overflow: 'hidden'
            }}
          >
            {/* Spinning light ray */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'conic-gradient(from 0deg at 50% 50%, transparent 40%, rgba(16, 185, 129, 0.15) 50%, transparent 60%)',
                animation: 'spin 12s linear infinite',
                pointerEvents: 'none'
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '1.5rem' }}>
              <div
                style={{
                  fontSize: '2.75rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.25rem'
                }}
              >
                PERN
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                Full-Stack Architecture
              </div>
            </div>
          </div>

          {/* Floating tech cards */}
          <div className="floating-tech-card" style={{ position: 'absolute', top: '15%', left: '5%', animation: 'float-card-1 5s ease-in-out infinite' }}>
            <span style={{ color: '#61DAFB' }}>React</span>
          </div>
          <div className="floating-tech-card" style={{ position: 'absolute', bottom: '20%', left: '8%', animation: 'float-card-2 6s ease-in-out infinite' }}>
            <span style={{ color: '#336791' }}>PostgreSQL</span>
          </div>
          <div className="floating-tech-card" style={{ position: 'absolute', top: '25%', right: '5%', animation: 'float-card-3 4.5s ease-in-out infinite' }}>
            <span style={{ color: '#339933' }}>Node.js</span>
          </div>
          <div className="floating-tech-card" style={{ position: 'absolute', bottom: '25%', right: '8%', animation: 'float-card-4 5.5s ease-in-out infinite' }}>
            <span style={{ color: '#10B981' }}>Express</span>
          </div>
        </motion.div>
      </div>

      {/* Floating decorative icons */}
      {floatingIcons.map(({ Icon, color, top, bottom, left, right, delay }, idx) => (
        <motion.div
          key={idx}
          style={{
            position: 'absolute',
            top, bottom, left, right,
            color,
            opacity: 0.12,
            pointerEvents: 'none',
            zIndex: 1
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay,
            ease: 'easeInOut'
          }}
          className="hero-floating-icon"
        >
          <Icon size={36} />
        </motion.div>
      ))}

      {/* Ambient Radial Lights */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .floating-tech-card {
          background: var(--glass-card-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--border-color);
          padding: 0.45rem 0.9rem;
          border-radius: 9999px;
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 0.82rem;
          box-shadow: var(--shadow-md);
        }

        @keyframes float-card-1 {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes float-card-2 {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-16px) rotate(-2deg); }
        }
        @keyframes float-card-3 {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes float-card-4 {
          0%, 100% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-14px) rotate(-3deg); }
        }

        /* Tablet */
        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2rem !important;
          }
          #hero {
            padding-top: 6rem !important;
            padding-bottom: 3rem !important;
          }
          .hero-text-area {
            align-items: center !important;
          }
          .hero-visual-panel {
            height: 300px !important;
            order: -1;
          }
          .hero-floating-icon {
            display: none;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          #hero {
            padding-top: 5.5rem !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .hero-visual-panel {
            height: 260px !important;
          }
          .hero-visual-panel .glass-panel {
            width: 210px !important;
            height: 210px !important;
          }
          .hero-cta-row {
            justify-content: center;
            width: 100%;
          }
          .hero-cta-row .btn {
            flex: 1 1 140px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
