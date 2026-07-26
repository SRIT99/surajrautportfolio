import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Star, Heart } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const About = () => {
  const stats = [
    { label: 'Current semester', value: '8th — BSc CSIT' },
    { label: 'University', value: 'Central Campus of Tech, Dharan' },
    { label: 'Based in', value: 'Damak, Jhapa / Dharan, Nepal' },
    { label: 'Focus', value: 'Frontend (React, Tailwind, JS)' },
    { label: 'Available for', value: 'Internships & Freelance' },
    { label: 'GPA (SEE)', value: '3.55' },
  ];

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay, ease: 'easeOut' }
  });

  return (
    <PageLayout
      title="About — Suraj Raut | Frontend Developer, Damak Nepal"
      description="Learn about Suraj Raut: a BSc CSIT student and frontend developer from Damak, Jhapa, Nepal. Focused on React.js, Tailwind CSS, and building real-world interfaces."
    >
      <section className="section">
        <div className="container">

          {/* Section label */}
          <div className="label" style={{ marginBottom: '1rem' }}>About me</div>
          <h1 className="section-title" style={{ marginBottom: '0.5rem', maxWidth: '600px' }}>
            The person behind the code.
          </h1>

          <hr className="divider" style={{ margin: '2.5rem 0' }} />

          {/* Two-column layout */}
          <div className="about-grid">

            {/* Photo column */}
            <motion.div {...fadeUp(0)} className="about-photo-col">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <img
                  src="/suraj-raut.jpg"
                  alt="Suraj Raut, web developer based in Damak, Jhapa and Dharan, Nepal"
                  title="Suraj Raut — Web Developer from Damak, Nepal"
                  width="320"
                  height="400"
                  style={{
                    width: '100%',
                    maxWidth: '320px',
                    height: '400px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--bg-border)',
                    display: 'block'
                  }}
                  itemProp="image"
                />
                {/* Amber accent border corner */}
                <div style={{
                  position: 'absolute', top: '-8px', left: '-8px',
                  width: '45px', height: '45px',
                  borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)',
                  borderRadius: 'var(--radius-sm) 0 0 0'
                }} />
                <div style={{
                  position: 'absolute', bottom: '-8px', right: '-8px',
                  width: '45px', height: '45px',
                  borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)',
                  borderRadius: '0 0 var(--radius-sm) 0'
                }} />

                {/* Location badge on photo */}
                <div style={{
                  position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)',
                  background: 'rgba(13,13,13,0.9)', backdropFilter: 'blur(8px)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: '9999px', padding: '0.35rem 0.85rem',
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  whiteSpace: 'nowrap', fontSize: '0.8rem', color: 'var(--text-secondary)'
                }}>
                  <MapPin size={11} style={{ color: 'var(--accent)' }} />
                  Damak, Jhapa · Nepal
                </div>
              </div>
            </motion.div>

            {/* Bio column */}
            <motion.div {...fadeUp(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 400, lineHeight: 1.3, color: 'var(--text-primary)' }}>
                Frontend developer who understands what happens on the backend.
              </h2>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                I'm Suraj Raut, a frontend-focused web developer and BSc CSIT student at Central Campus of Technology, Dharan. I grew up in Damak, Jhapa, and spend most of my time building UIs that are clean, accessible, and actually pleasant to use.
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                My strongest area is the frontend: React.js, Tailwind CSS, HTML/CSS, and JavaScript are where I'm most comfortable. I understand backend concepts. I can read, write, and vibe-code, and find out bugs in Node.js + Express APIs, but I won't pretend I'm a senior backend engineer. I'm being honest about where I am and actively improving.
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Outside of coding I have experience coordinating tech workshops, teaching mathematics and science, and managing IT infrastructure at a school. Those experiences gave me the communication and problem-solving habits that make working with teams easier.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                <Link to="/projects" className="btn btn-primary">See my projects</Link>
                <a href="/CVsurajraut.pdf" download="Suraj_Raut_CV.pdf" className="btn btn-ghost">Download CV</a>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div {...fadeUp(0.2)} style={{ marginTop: '4rem' }}>
            <div className="label" style={{ marginBottom: '1.5rem' }}>Quick facts</div>
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div key={i} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>{s.label}</div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>{s.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div {...fadeUp(0.25)} style={{ marginTop: '4rem' }}>
            <hr className="divider" style={{ marginBottom: '3rem' }} />
            <div className="label" style={{ marginBottom: '1.5rem' }}>What I care about</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="values-grid">
              {[
                { icon: Star, title: 'Honest code', desc: 'I show real skill levels. No fake 90% React bars — just what I actually know and what I\'m learning.' },
                { icon: GraduationCap, title: 'Always learning', desc: 'Currently deepening Redux, backend architecture, and system design concepts. Open to mentorship.' },
                { icon: Heart, title: 'Good UX first', desc: 'Interfaces should feel good, load fast, and make sense. Design and developer concerns are the same concern.' },
              ].map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div style={{ color: 'var(--accent)', opacity: 0.9 }}><Icon size={20} /></div>
                    <h4 style={{ color: 'var(--text-primary)' }}>{v.title}</h4>
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 4rem;
          align-items: start;
        }
        .about-photo-col {
          flex-shrink: 0;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .values-grid { }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-photo-col img {
            max-width: 220px !important;
            height: 280px !important;
          }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .values-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </PageLayout>
  );
};

export default About;
