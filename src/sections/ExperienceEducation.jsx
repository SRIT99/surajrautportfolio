import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';

const ExperienceEducation = () => {
  const experiences = [
    {
      role: 'IT Incharge',
      company: 'Baigundhura English Boarding School',
      period: '2024 - Present',
      points: [
        'IT Infrastructure Management & Network Supervision',
        'System & technical support coordination across campus',
        'Hardware maintenance & troubleshooting of computing hardware',
        'Software licensing, installation, and database maintenance support'
      ]
    },
    {
      role: 'Mathematics & Science Teacher',
      company: 'Ideal English Boarding School',
      period: '2022 - 2024',
      points: [
        'Enhanced communication and mentorship capabilities',
        'Supervised student leadership and extra-curricular clubs',
        'Academic planning, test coordination, and lectures preparation',
        'Mentored students in science competitions and mathematics workshops'
      ]
    }
  ];

  const education = [
    {
      degree: 'BSc CSIT (Bachelor of Science in Computer Science & Information Technology)',
      school: 'Central Campus of Technology, Dharan',
      period: '7th Semester (Current)',
      detail: 'Tribhuvan University affiliated program focusing on advanced software engineering, algorithm analysis, and database systems.'
    },
    {
      degree: '+2 Science',
      school: 'Himalaya Secondary School',
      period: 'Graduated',
      detail: 'Core science curriculum with a major focus on Physics, Mathematics, and Computer Science.'
    },
    {
      degree: 'SEE (Secondary Education Examination)',
      school: 'Motherland English Boarding School',
      period: 'Graduated',
      detail: 'Secondary education with academic distinction. Achieved a GPA of 3.55.'
    }
  ];

  return (
    <section id="experience" className="section-padding" style={{ background: '#0F172A', position: 'relative' }}>
      {/* Light separator line */}
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
        
        {/* Layout Grid */}
        <div className="grid-2" style={{ gap: '4rem' }}>
          
          {/* Left Column: Work Experience */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Title */}
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Career Path</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: '#fff', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-display)' }}>
                <Briefcase color="var(--primary)" size={28} />
                Experience
              </h2>
              <div style={{ width: '40px', height: '3px', background: 'var(--gradient-primary)', marginTop: '0.75rem', borderRadius: '2px' }} />
            </div>

            {/* Experience Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '2px solid rgba(255, 255, 255, 0.05)', paddingLeft: '1.5rem', position: 'relative', marginLeft: '0.5rem' }}>
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{ position: 'relative' }}
                >
                  {/* Timeline Node Dot */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '6px',
                      left: 'calc(-1.5rem - 7px)',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#111827',
                      border: '2px solid var(--primary)',
                      boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)',
                      zIndex: 2
                    }}
                  />

                  {/* Experience Card */}
                  <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(17, 24, 39, 0.45)', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div>
                        <h4 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 600 }}>{exp.role}</h4>
                        <p style={{ fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 500 }}>{exp.company}</p>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(255,255,255,0.03)', padding: '0.25rem 0.6rem', borderRadius: '4px' }}>
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>

                    <ul style={{ paddingLeft: '1.15rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Title */}
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Academic History</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: '#fff', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-display)' }}>
                <GraduationCap color="var(--blue)" size={30} />
                Education
              </h2>
              <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--blue), #10B981)', marginTop: '0.75rem', borderRadius: '2px' }} />
            </div>

            {/* Education Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '2px solid rgba(255, 255, 255, 0.05)', paddingLeft: '1.5rem', position: 'relative', marginLeft: '0.5rem' }}>
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{ position: 'relative' }}
                >
                  {/* Timeline Node Dot */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '6px',
                      left: 'calc(-1.5rem - 7px)',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#111827',
                      border: '2px solid var(--blue)',
                      boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                      zIndex: 2
                    }}
                  />

                  {/* Education Card */}
                  <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(17, 24, 39, 0.45)', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ flex: '1 1 auto', maxWidth: '70%' }}>
                        <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 600, lineHeight: '1.3' }}>{edu.degree}</h4>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{edu.school}</p>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(255,255,255,0.03)', padding: '0.25rem 0.6rem', borderRadius: '4px', height: 'fit-content' }}>
                        <Calendar size={12} />
                        {edu.period}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      {edu.detail}
                    </p>

                    {edu.degree.includes('SEE') && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--blue)', fontSize: '0.8rem', fontWeight: 600, marginTop: '0.75rem' }}>
                        <Award size={14} />
                        Graduated with GPA 3.55
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Leadership & Activities Sub-Section */}
        <div style={{ marginTop: '5rem', borderTop: '1px dashed rgba(255, 255, 255, 0.05)', paddingTop: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Involvement</span>
            <h3 style={{ fontSize: '1.75rem', color: '#fff', marginTop: '0.25rem', fontFamily: 'var(--font-display)' }}>Leadership & Workshop Activities</h3>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {/* Workshop Activity 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', background: 'rgba(17, 24, 39, 0.45)', border: '1px solid rgba(255, 255, 255, 0.04)' }}
            >
              <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Workshop Coordinator</span>
              <h4 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600, marginBottom: '0.75rem' }}>7-Day Computer Hardware and Networking Workshop</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Organized and led technical training modules for workshop participants. Supervised practical labs on system construction, networking topology designs, client-server administration, and hardware maintenance pipelines.
              </p>
            </motion.div>

            {/* Workshop Activity 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass-panel"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', background: 'rgba(17, 24, 39, 0.45)', border: '1px solid rgba(255, 255, 255, 0.04)' }}
            >
              <span style={{ fontSize: '0.8rem', color: 'var(--blue)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Volunteer Trainer</span>
              <h4 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600, marginBottom: '0.75rem' }}>10-Day Mobile Application Development Workshop</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Assisted and mentored student developers during project labs. Supported lectures on hybrid mobile application architectures, API integrations, and local storage mechanisms.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceEducation;
