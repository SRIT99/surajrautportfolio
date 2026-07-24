import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const [activeProposal, setActiveProposal] = useState(null);

  const projects = [
    {
      id: 'pharmalink',
      title: 'PharmaLink',
      tagline: 'B2B pharmaceutical supply-chain platform',
      status: 'Frontend live — Backend in development',
      statusColor: '#E8A838',
      liveUrl: 'https://pharmalink-project.vercel.app/',
      githubUrl: 'https://github.com/SRIT99/pharmalink_project',
      proposalUrl: '/proposals/pharmalink-proposal.pdf',
      description: 'A B2B pharmaceutical e-commerce and supply-chain management platform connecting suppliers, distributors, wholesalers, hospitals, and pharmacies through a centralised digital ecosystem.',
      myRole: 'Built the entire frontend: component architecture, routing, dashboard UI, role-based views, and responsive layout. Backend API integration in progress.',
      techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL'],
      highlights: [
        'Multi-role dashboard system (Supplier / Buyer)',
        'Inventory management interface',
        'Order tracking UI',
        'JWT authentication flow',
        'Smart search & filter components',
      ],
      accentColor: '#E8A838',
    },
    {
      id: 'doko',
      title: 'Doko App',
      tagline: 'Digital agro-marketplace for Nepal',
      status: 'Frontend live — Backend migration in progress',
      statusColor: '#5CB87A',
      liveUrl: 'https://test-ecommerce-r9qd.vercel.app/',
      githubUrl: 'https://github.com/SRIT99/test-ecommerce',
      proposalUrl: '/proposals/doko-proposal.pdf',
      description: 'A concept marketplace connecting farmers, buyers, and transporters in Nepal — designed to remove intermediaries, optimise logistics, and integrate secure digital payments.',
      myRole: 'Frontend development: product listing UI, search & filters, authentication pages, cart flow, and responsive mobile layout.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs'],
      highlights: [
        'Product marketplace with category filters',
        'Secure authentication UI',
        'Order management flow',
        'Transport coordination interface',
        'Responsive mobile-first layout',
      ],
      accentColor: '#4A8FD4',
    }
  ];

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  });

  return (
    <PageLayout
      title="Projects — Suraj Raut | React Frontend Developer"
      description="Frontend projects by Suraj Raut — PharmaLink (pharmaceutical B2B platform) and Doko App (agro-marketplace). Built with React.js, Tailwind CSS, and Node.js."
    >
      <section className="section">
        <div className="container">
          <div className="label" style={{ marginBottom: '1rem' }}>My work</div>
          <h1 className="section-title">Featured Projects</h1>
          <p style={{ marginTop: '0.75rem', maxWidth: '540px', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Two real-world applications I've built. Frontend is my primary contribution — both projects show my ability to architect component systems, handle state, and build complete UIs.
          </p>

          <hr className="divider" style={{ margin: '2.5rem 0' }} />

          {/* Projects */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {projects.map((project, i) => (
              <motion.article key={project.id} {...fadeUp(i * 0.05)}>
                <div className="project-row" style={{ '--reverse': i % 2 !== 0 ? 'row-reverse' : 'row' }}>

                  {/* Visual card */}
                  <div className="project-visual">
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(160deg, #141414 0%, #0D0D0D 100%)`,
                      borderRadius: 'var(--radius-md)',
                      border: `1px solid var(--bg-border)`,
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2rem'
                    }}>
                      {/* Simulated browser chrome */}
                      <div style={{
                        width: '100%', maxWidth: '380px',
                        background: '#0D0D0D',
                        borderRadius: '10px',
                        border: '1px solid #2a2a2a',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
                      }}>
                        {/* Browser bar */}
                        <div style={{ padding: '0.6rem 1rem', background: '#1A1A1A', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #252525' }}>
                          <div style={{ display: 'flex', gap: '5px' }}>
                            {['#EF4444','#F59E0B','#5CB87A'].map(c => (
                              <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, display: 'block' }} />
                            ))}
                          </div>
                          <div style={{ flex: 1, background: '#252525', borderRadius: '4px', height: '18px', fontSize: '0.6rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem' }}>
                            {project.liveUrl.replace('https://', '')}
                          </div>
                        </div>
                        {/* Mockup content */}
                        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <div style={{ height: '10px', width: '60%', background: project.accentColor, borderRadius: '4px', opacity: 0.7 }} />
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                            {[1,2,3].map(n => (
                              <div key={n} style={{ height: '50px', background: '#1A1A1A', borderRadius: '6px', border: '1px solid #252525' }} />
                            ))}
                          </div>
                          <div style={{ height: '6px', width: '80%', background: '#252525', borderRadius: '3px' }} />
                          <div style={{ height: '6px', width: '55%', background: '#252525', borderRadius: '3px' }} />
                          <div style={{ height: '6px', width: '70%', background: '#252525', borderRadius: '3px' }} />
                          <div style={{ marginTop: '0.25rem', display: 'flex', gap: '0.5rem' }}>
                            <div style={{ height: '28px', width: '80px', background: project.accentColor, borderRadius: '4px', opacity: 0.8 }} />
                            <div style={{ height: '28px', width: '80px', background: '#252525', borderRadius: '4px' }} />
                          </div>
                        </div>
                      </div>

                      {/* Accent glow */}
                      <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
                        background: `radial-gradient(ellipse at 50% 100%, ${project.accentColor}18, transparent)`,
                        pointerEvents: 'none'
                      }} />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="project-details">
                    {/* Status badge */}
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      fontSize: '0.75rem', fontWeight: 600,
                      padding: '0.25rem 0.75rem', borderRadius: '9999px',
                      background: `${project.statusColor}15`,
                      border: `1px solid ${project.statusColor}35`,
                      color: project.statusColor, marginBottom: '1rem'
                    }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: project.statusColor, display: 'inline-block' }} />
                      {project.status}
                    </div>

                    <h2 style={{ marginBottom: '0.3rem', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                      {project.title}
                    </h2>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                      {project.tagline}
                    </p>

                    <p style={{ fontSize: '0.93rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                      {project.description}
                    </p>

                    {/* My role callout */}
                    <div style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--bg-border)',
                      borderLeft: `3px solid var(--accent)`,
                      borderRadius: `0 var(--radius-sm) var(--radius-sm) 0`,
                      padding: '0.85rem 1rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>My contribution</div>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{project.myRole}</p>
                    </div>

                    {/* Tech stack */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {project.techStack.map(t => (
                        <span key={t} className="chip chip-familiar" style={{ fontSize: '0.8rem' }}>{t}</span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.75rem' }}>
                      {project.highlights.map(h => (
                        <li key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* CTAs */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.87rem', padding: '0.6rem 1.25rem' }}>
                        <ExternalLink size={14} />
                        Live demo
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.87rem', padding: '0.6rem 1.25rem' }}>
                        <GithubIcon size={14} />
                        Source code
                      </a>
                      <button
                        onClick={() => setActiveProposal(project)}
                        className="btn btn-outline"
                        style={{ fontSize: '0.87rem', padding: '0.6rem 1.25rem' }}
                      >
                        <FileText size={14} />
                        View proposal
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal Modal */}
      {activeProposal && (
        <div
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
            zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setActiveProposal(null)}
        >
          <div
            style={{
              background: 'var(--bg-surface)', border: '1px solid var(--bg-border)',
              borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '860px',
              height: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--bg-border)' }}>
              <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-sans)' }}>{activeProposal.title} — Proposal</h3>
              <button onClick={() => setActiveProposal(null)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.25rem', lineHeight: 1 }}>✕</button>
            </div>
            <iframe
              src={activeProposal.proposalUrl}
              style={{ flex: 1, border: 'none', width: '100%' }}
              title={`${activeProposal.title} proposal PDF`}
            />
          </div>
        </div>
      )}

      <style>{`
        .project-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          flex-direction: var(--reverse, row);
          gap: 3.5rem;
          align-items: start;
        }
        .project-visual {
          order: 0;
          height: 340px;
        }
        .project-row:nth-child(even) .project-visual {
          order: 1;
        }
        @media (max-width: 900px) {
          .project-row {
            grid-template-columns: 1fr !important;
          }
          .project-visual {
            order: -1 !important;
            height: 260px;
          }
        }
      `}</style>
    </PageLayout>
  );
};

export default Projects;
