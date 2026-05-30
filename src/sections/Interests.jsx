import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Cpu, Video, Lightbulb } from 'lucide-react';

const YoutubeIcon = ({ size = 22, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" /><path d="m10 15 5-3-5-3z" /></svg>
);

const Interests = () => {
  const interestsData = [
    {
      name: 'Chess',
      icon: Award,
      desc: 'Analytical strategy and tactical pattern recognition. Trains critical problem-solving skills.',
      color: '#10B981'
    },
    {
      name: 'Software Development',
      icon: Code2,
      desc: 'Building responsive frontend interfaces and architecting stable backend server systems.',
      color: '#3B82F6'
    },
    {
      name: 'Technology',
      icon: Cpu,
      desc: 'Keeping pace with systems architectures, hardware innovations, and cloud advancements.',
      color: '#22C55E'
    },
    {
      name: 'Video Editing',
      icon: Video,
      desc: 'Crafting pacing and visuals using video editors. Focus on storytelling and content flow.',
      color: '#3B82F6'
    },
    {
      name: 'Content Creation',
      icon: YoutubeIcon,
      desc: 'Designing thumbnails, building media brands, and planning digital content structures.',
      color: '#10B981'
    },
    {
      name: 'Learning New Tech',
      icon: Lightbulb,
      desc: 'Investigating frameworks, libraries, database concepts, and system architecture structures.',
      color: '#22C55E'
    }
  ];

  return (
    <section id="interests" className="section-padding" style={{ background: '#0B1220', position: 'relative' }}>
      {/* Separator line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          width: '80%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)'
        }}
      />

      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Personal Interests</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: '#fff', marginTop: '0.5rem' }}>Beyond the IDE</h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--gradient-primary)', margin: '1rem auto 0 auto', borderRadius: '2px' }} />
        </div>

        {/* Interests Grid */}
        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {interestsData.map((interest, idx) => {
            const IconComp = interest.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  background: 'rgba(17, 24, 39, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  cursor: 'default'
                }}
              >
                {/* Icon wrapper */}
                <div
                  style={{
                    background: `rgba(${interest.color === '#10B981' ? '16, 185, 129' : interest.color === '#3B82F6' ? '59, 130, 246' : '34, 197, 94'}, 0.08)`,
                    color: interest.color,
                    padding: '0.6rem',
                    borderRadius: '8px',
                    width: 'fit-content',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <IconComp size={22} />
                </div>

                {/* Details */}
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 600, fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>
                    {interest.name}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {interest.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Interests;
