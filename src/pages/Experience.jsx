import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Experience = () => {
  const experiences = [
    {
      role: 'IT Incharge',
      company: 'Baigundhura English Boarding School',
      period: '2024 – Present',
      type: 'work',
      points: [
        'IT infrastructure management & network supervision across campus',
        'System and technical support coordination for staff and students',
        'Hardware maintenance & troubleshooting of computing equipment',
        'Software licensing, installation, and database maintenance support',
      ]
    },
    {
      role: 'Mathematics & Science Teacher',
      company: 'Ideal English Boarding School',
      period: '2022 – 2024',
      type: 'work',
      points: [
        'Taught mathematics and science to secondary-level students',
        'Supervised student leadership and extra-curricular clubs',
        'Academic planning, test coordination, and lecture preparation',
        'Mentored students in science competitions and mathematics workshops',
      ]
    }
  ];

  const education = [
    {
      degree: 'BSc CSIT',
      full: 'Bachelor of Science in Computer Science & Information Technology',
      school: 'Central Campus of Technology, Dharan',
      period: '7th Semester (Current)',
      detail: 'Tribhuvan University affiliated program. Focus on software engineering, algorithm design, database systems, and web development.'
    },
    {
      degree: '+2 Science',
      full: 'Higher Secondary Science Stream',
      school: 'Himalaya Secondary School',
      period: 'Graduated',
      detail: 'Physics, Mathematics, and Computer Science core curriculum.'
    },
    {
      degree: 'SEE',
      full: 'Secondary Education Examination',
      school: 'Motherland English Boarding School',
      period: 'Graduated',
      detail: 'Achieved GPA 3.55. Strong foundation in mathematics and sciences.'
    }
  ];

  const activities = [
    {
      tag: 'Workshop Coordinator',
      tagColor: 'var(--accent)',
      title: '7-Day Computer Hardware & Networking Workshop',
      desc: 'Organized and led technical training modules. Supervised practical labs on system building, networking topology, client-server administration, and hardware maintenance.'
    },
    {
      tag: 'Volunteer Trainer',
      tagColor: 'var(--blue)',
      title: '10-Day Mobile Application Development Workshop',
      desc: 'Assisted and mentored student developers during project labs. Supported lectures on hybrid mobile app architectures, API integrations, and local storage.'
    }
  ];

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5, delay, ease: 'easeOut' }
  });

  return (
    <PageLayout
      title="Experience — Suraj Raut | Developer & IT Professional, Dharan, Nepal"
      description="Work experience, education, and activities of Suraj Raut — IT Incharge at Baigundhura School, BSc CSIT student at Central Campus of Technology, Dharan."
    >
      <section className="section">
        <div className="container">
          <div className="label" style={{ marginBottom: '1rem' }}>Background</div>
          <h1 className="section-title">Experience & Education</h1>

          <hr className="divider" style={{ margin: '2.5rem 0' }} />

          {/* Two columns */}
          <div className="exp-grid">

            {/* Work */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
                <Briefcase size={18} style={{ color: 'var(--accent)' }} />
                <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>Work Experience</h2>
              </div>

              <div className="timeline">
                {experiences.map((exp, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.1)} className="timeline-item">
                    <div className="card card-accent" style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <div>
                          <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{exp.role}</h4>
                          <p style={{ fontSize: '0.84rem', color: 'var(--accent)', fontWeight: 500 }}>{exp.company}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-muted)', background: 'var(--bg-raised)', padding: '0.25rem 0.65rem', borderRadius: '4px', height: 'fit-content', whiteSpace: 'nowrap' }}>
                          <Calendar size={11} />
                          {exp.period}
                        </div>
                      </div>
                      <ul style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {exp.points.map((pt, pi) => (
                          <li key={pi} style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
                <GraduationCap size={18} style={{ color: 'var(--blue)' }} />
                <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>Education</h2>
              </div>

              <div className="timeline">
                {education.map((edu, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.1 + 0.05)} className="timeline-item" style={{ '--dot-color': 'var(--blue)' }}>
                    <div className="card" style={{ padding: '1.5rem', borderLeft: '3px solid var(--blue)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                        <div>
                          <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.15rem' }}>{edu.degree}</h4>
                          <p style={{ fontSize: '0.8rem', color: 'var(--blue)', fontWeight: 500 }}>{edu.full}</p>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{edu.school}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--bg-raised)', padding: '0.25rem 0.65rem', borderRadius: '4px', height: 'fit-content', whiteSpace: 'nowrap' }}>
                          <Calendar size={11} />
                          {edu.period}
                        </div>
                      </div>
                      <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{edu.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Activities */}
          <hr className="divider" style={{ margin: '3.5rem 0' }} />

          <motion.div {...fadeUp(0.2)}>
            <div className="label" style={{ marginBottom: '1.5rem' }}>Activities</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '1.75rem' }}>
              Leadership & Workshops
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="activities-grid">
              {activities.map((a, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.73rem', color: a.tagColor, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>{a.tag}</div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.6rem' }}>{a.title}</h4>
                  <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <style>{`
        .exp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .exp-grid { grid-template-columns: 1fr; gap: 3rem; }
          .activities-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
};

export default Experience;
