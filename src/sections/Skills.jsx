import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Sparkles, HeartHandshake, Settings, Video, Image, PenTool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      color: '#10B981', // Green
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML5 / CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Bootstrap', level: 80 }
      ]
    },
    {
      title: 'Backend Engineering',
      icon: Server,
      color: '#3B82F6', // Blue
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'JWT Auth', level: 85 },
        { name: 'Auth & Security', level: 80 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: '#22C55E', // Green Accent
      skills: [
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Development Tools',
      icon: Settings,
      color: '#3B82F6', // Blue
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Vite', level: 85 }
      ]
    },
    {
      title: 'Multimedia Skills',
      icon: Sparkles,
      color: '#10B981', // Green
      skills: [
        { name: 'Video Editing', level: 75 },
        { name: 'Photo Editing', level: 72 },
        { name: 'Thumbnail Design', level: 80 },
        { name: 'Content Creation', level: 70 },
        { name: 'Social Media Branding', level: 75 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: HeartHandshake,
      color: '#22C55E', // Accent
      skills: [
        { name: 'Problem Solving', level: 92 },
        { name: 'Communication', level: 85 },
        { name: 'Leadership', level: 88 },
        { name: 'Team Collaboration', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding" style={{ background: '#0B1220', position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Capabilities</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: '#fff', marginTop: '0.5rem' }}>Core Skills</h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--gradient-primary)', margin: '1rem auto 0 auto', borderRadius: '2px' }} />
        </div>

        {/* Categories Grid */}
        <div className="grid-3">
          {skillCategories.map((category, catIndex) => {
            const IconComp = category.icon;
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(17, 24, 39, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Glowing bottom border indicator */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: category.color
                  }}
                />

                {/* Card Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      background: `rgba(${category.color === '#3B82F6' ? '59, 130, 246' : '16, 185, 129'}, 0.08)`,
                      color: category.color,
                      padding: '0.5rem',
                      borderRadius: '8px'
                    }}
                  >
                    <IconComp size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 600, fontFamily: 'var(--font-display)' }}>
                    {category.title}
                  </h3>
                </div>

                {/* Skill List items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{skill.name}</span>
                        <span style={{ color: 'var(--text-muted)' }}>{skill.level}%</span>
                      </div>
                      {/* Custom level bar wrapper */}
                      <div
                        style={{
                          height: '5px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '10px',
                          overflow: 'hidden'
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                          style={{
                            height: '100%',
                            background: `linear-gradient(90deg, ${category.color}, #10B981)`,
                            borderRadius: '10px'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
