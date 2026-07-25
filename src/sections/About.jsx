import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Target, ShieldCheck } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: BookOpen,
      title: '8th Semester',
      desc: 'BSc CSIT Student',
      detail: 'Central Campus of Technology',
      color: '#10B981'
    },
    {
      icon: Award,
      title: '3.55 GPA',
      desc: 'Academic Excellence',
      detail: 'Focus on Theory & Practice',
      color: '#3B82F6'
    },
    {
      icon: Target,
      title: 'PERN Stack',
      desc: 'Primary Focus',
      detail: 'Postgres, Express, React, Node',
      color: '#22C55E'
    },
    {
      icon: ShieldCheck,
      title: 'Leadership',
      desc: 'IT & Mentorship',
      detail: 'Workshop Coordinator & IT Incharge',
      color: '#3B82F6'
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--section-mid)', position: 'relative' }}>
      {/* Separator line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          width: '80%',
          height: '1px',
          background: 'var(--separator)'
        }}
      />

      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Biography</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--text-primary)', marginTop: '0.5rem' }}>About Me</h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--gradient-primary)', margin: '1rem auto 0 auto', borderRadius: '2px' }} />
        </div>

        {/* Content Layout Grid */}
        <div className="grid-2" style={{ alignItems: 'center' }}>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
              Bridging robust backend logic with interactive frontend design.
            </h3>

            <p style={{ fontSize: '1rem', lineHeight: '1.75', marginBottom: '1.25rem', color: 'var(--text-muted)' }}>
              I am a Full-Stack PERN Stack Developer and BSc CSIT student passionate about building modern web applications that solve real-world problems.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: '1.75', marginBottom: '1.25rem', color: 'var(--text-muted)' }}>
              My background combines software development, IT administration, leadership, and education, giving me strong technical and communication skills. I enjoy creating scalable backend systems, intuitive user interfaces, and efficient database solutions.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: '1.75', color: 'var(--text-muted)' }}>
              I continuously improve my skills through practical projects, self-learning, and hands-on development experience.
            </p>
          </motion.div>

          {/* Stats Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="about-stats-grid">
            {stats.map((stat, index) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      background: `rgba(${stat.color === '#10B981' ? '16, 185, 129' : stat.color === '#22C55E' ? '34, 197, 94' : '59, 130, 246'}, 0.1)`,
                      color: stat.color,
                      padding: '0.55rem',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-display)' }}>
                      {stat.title}
                    </h4>
                    <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '0.1rem' }}>
                      {stat.desc}
                    </p>
                    <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', opacity: 0.7, marginTop: '0.35rem', lineHeight: '1.3' }}>
                      {stat.detail}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .about-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
