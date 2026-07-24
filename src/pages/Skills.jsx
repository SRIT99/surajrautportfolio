import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';

const Skills = () => {
  const skillGroups = [
    {
      label: 'Strong',
      chipClass: 'chip-strong',
      note: 'These are my daily drivers. I build with these comfortably.',
      skills: [
        'React.js',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Git & GitHub',
        'Responsive Design',
        'REST API consumption',
      ]
    },
    {
      label: 'Learning & Improving',
      chipClass: 'chip-learning',
      note: 'Actively studying these — mid-level, getting better every week.',
      skills: [
        'Redux Toolkit',
        'Context API',
        'React Router',
        'TypeScript (basics)',
        'Framer Motion',
        'Vite',
        'Postman',
      ]
    },
    {
      label: 'Can work with (backend)',
      chipClass: 'chip-familiar',
      note: 'I understand these and can vibe-code backend features. Not my primary focus.',
      skills: [
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'SQL',
        'JWT Authentication',
        'REST API design',
        'MongoDB (basics)',
      ]
    }
  ];

  const tools = [
    'VS Code', 'Git', 'GitHub', 'Postman', 'Figma (read)', 'Vite', 'npm', 'Vercel'
  ];

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5, delay, ease: 'easeOut' }
  });

  return (
    <PageLayout
      title="Skills — Suraj Raut | React & Frontend Developer"
      description="Suraj Raut's frontend skills: React.js, JavaScript, HTML/CSS, Tailwind CSS, Git. Also familiar with Node.js, Express, and PostgreSQL."
    >
      <section className="section">
        <div className="container">
          <div className="label" style={{ marginBottom: '1rem' }}>What I know</div>
          <h1 className="section-title">Skills & Technologies</h1>
          <p style={{ marginTop: '0.75rem', maxWidth: '560px', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Honest breakdown — no fake progress bars. Three tiers: what I'm strong at, what I'm actively learning, and what I can work with on the backend.
          </p>

          <hr className="divider" style={{ margin: '2.5rem 0' }} />

          {/* Skill groups */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {skillGroups.map((group, gi) => (
              <motion.div key={gi} {...fadeUp(gi * 0.1)}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  <div>
                    <div className="label" style={{ marginBottom: '0.3rem' }}>{group.label}</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '400px', marginTop: '0.25rem' }}>
                      {group.note}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  {group.skills.map(skill => (
                    <span key={skill} className={`chip ${group.chipClass}`}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <hr className="divider" style={{ margin: '3.5rem 0' }} />

          {/* Tools */}
          <motion.div {...fadeUp(0.3)}>
            <div className="label" style={{ marginBottom: '1rem' }}>Tools I use</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {tools.map(t => (
                <span key={t} className="chip chip-familiar">{t}</span>
              ))}
            </div>
          </motion.div>

          <hr className="divider" style={{ margin: '3.5rem 0' }} />

          {/* Soft skills + other */}
          <motion.div {...fadeUp(0.35)}>
            <div className="label" style={{ marginBottom: '1.5rem' }}>Beyond technical</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="soft-grid">
              {[
                { title: 'Workshop coordination',  desc: 'Organized & led a 7-day computer hardware + networking workshop for students.' },
                { title: 'Teaching & mentoring',   desc: 'Taught mathematics and science. Comfortable explaining complex topics simply.' },
                { title: 'Problem solving',        desc: 'Chess player — trained to think multiple steps ahead and evaluate trade-offs.' },
                { title: 'Content creation',       desc: 'Video editing, thumbnail design, and social media branding experience.' },
              ].map((s, i) => (
                <div key={i} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                  <h4 style={{ marginBottom: '0.4rem', fontSize: '0.95rem' }}>{s.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .soft-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
};

export default Skills;
