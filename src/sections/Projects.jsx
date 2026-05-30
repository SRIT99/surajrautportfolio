import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, Truck, Layout, Activity } from 'lucide-react';
import Modal from '../components/Modal';

const Projects = () => {
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 'pharmalink',
      title: 'PharmaLink',
      category: 'fullstack',
      status: 'Frontend Live | Backend In Development (Undeployed)',
      statusColor: '#F59E0B', // Amber
      liveUrl: 'https://pharmalink-project.vercel.app/',
      githubUrl: 'https://github.com/SRIT99/pharmalink_project',
      proposalUrl: '/proposals/pharmalink-proposal.pdf',
      description: 'A B2B pharmaceutical e-commerce and supply chain management platform designed to connect suppliers, distributors, wholesalers, hospitals, and pharmacies through a centralized digital ecosystem. It streamlines procurement, inventory visibility, and secure workflow logistics.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
      features: [
        'Supplier Dashboard',
        'Buyer Dashboard',
        'Inventory Management',
        'Order Tracking',
        'Smart Search',
        'JWT Authentication',
        'Role-Based Access',
        'Payment Integration Planning'
      ],
      icon: Activity,
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' // Emerald gradient
    },
    {
      id: 'doko',
      title: 'Doko App',
      category: 'fullstack',
      status: 'Frontend Live | Backend Migration In Progress',
      statusColor: '#10B981', // Emerald
      liveUrl: 'https://test-ecommerce-r9qd.vercel.app/',
      githubUrl: 'https://github.com/SRIT99/test-ecommerce',
      proposalUrl: '/proposals/doko-proposal.pdf',
      description: 'A digital agro-marketplace platform concept that connects farmers, buyers, and transporters in Nepal. Designed to optimize logistics, remove intermediaries, coordinates transport, and integrate secure digital payments.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs'],
      features: [
        'Product Marketplace',
        'Secure Authentication',
        'Order Management',
        'Search & Filtering',
        'Transport Coordination',
        'Payment Integration',
        'Responsive Layout Design'
      ],
      icon: Truck,
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)' // Blue gradient
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding" style={{ background: '#0F172A', position: 'relative' }}>
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
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>My Work</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: '#fff', marginTop: '0.5rem' }}>Featured Projects</h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--gradient-primary)', margin: '1rem auto 0 auto', borderRadius: '2px' }} />
        </div>

        {/* Project Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
          {['all', 'fullstack'].map((btnFilter) => (
            <button
              key={btnFilter}
              onClick={() => setFilter(btnFilter)}
              className={`btn ${filter === btnFilter ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', textTransform: 'capitalize' }}
            >
              {btnFilter === 'all' ? 'All Projects' : 'Full Stack'}
            </button>
          ))}
        </div>

        {/* Projects List Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {filteredProjects.map((project, index) => {
            const IconComp = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: index % 2 === 0 ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
                  gap: '4rem',
                  alignItems: 'center'
                }}
                className="project-row"
              >
                {/* Visual Area (Left/Right Mockup Frame) */}
                <div style={{ order: index % 2 === 0 ? 0 : 1 }} className="project-visual-container">
                  <div
                    className="glass-panel"
                    style={{
                      height: '350px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: project.gradient,
                      boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {/* Simulated App Mockup inside gradient block */}
                    <div
                      style={{
                        width: '85%',
                        height: '80%',
                        background: '#0B1220',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: 'var(--shadow-lg)',
                        padding: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      {/* Top Bar */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          <span style={{ width: '8px', height: '8px', background: '#EF4444', borderRadius: '50%' }} />
                          <span style={{ width: '8px', height: '8px', background: '#F59E0B', borderRadius: '50%' }} />
                          <span style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%' }} />
                        </div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.03)', padding: '2px 8px', borderRadius: '4px' }}>
                          {project.id === 'pharmalink' ? 'pharmalink-project.vercel.app' : 'test-ecommerce-r9qd.vercel.app'}
                        </div>
                      </div>

                      {/* Mockup Dashboard Content */}
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <div style={{ width: '30%', height: '40px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IconComp size={16} color="var(--primary)" />
                          </div>
                          <div style={{ flex: 1, height: '40px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ width: '50%', height: '6px', background: 'var(--text-primary)', borderRadius: '3px' }} />
                            <div style={{ width: '30%', height: '4px', background: 'var(--text-muted)', borderRadius: '2px', marginTop: '4px' }} />
                          </div>
                        </div>

                        <div style={{ flex: 1, background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
                          <Layout size={24} style={{ opacity: 0.2 }} />
                          <div style={{ width: '40%', height: '5px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }} />
                        </div>
                      </div>

                      {/* Grid Pattern inside Mockup background */}
                      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'radial-gradient(white 1px, transparent 0)', backgroundSize: '10px 10px', pointerEvents: 'none' }} />
                    </div>
                  </div>
                </div>

                {/* Details Area */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="project-details-container">
                  {/* Status Badge */}
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      background: `${project.statusColor}15`,
                      border: `1px solid ${project.statusColor}30`,
                      color: project.statusColor,
                      marginBottom: '1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', background: project.statusColor, borderRadius: '50%', display: 'inline-block' }} />
                    {project.status}
                  </span>

                  {/* Title */}
                  <h3 style={{ fontSize: '2rem', color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.8rem',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px',
                          color: '#fff'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features List */}
                  <div style={{ marginBottom: '2rem', width: '100%' }}>
                    <h4 style={{ fontSize: '0.9rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: 600 }}>Key Architecture & Features</h4>
                    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem 1.5rem', listStyle: 'none' }} className="project-features-list">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} style={{ fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ width: '4px', height: '4px', background: 'var(--primary)', borderRadius: '50%' }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                      Source Code
                    </a>

                    <button
                      onClick={() => setSelectedProposal(project)}
                      className="btn btn-outline"
                      style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                    >
                      <FileText size={16} />
                      See Proposal
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Proposals Modal */}
      {selectedProposal && (
        <Modal
          isOpen={!!selectedProposal}
          onClose={() => setSelectedProposal(null)}
          title={selectedProposal.title}
          pdfUrl={selectedProposal.proposalUrl}
        />
      )}

      <style>{`
        @media (max-width: 992px) {
          .project-row {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .project-row > div {
            order: 0 !important;
          }
          .project-visual-container {
            max-width: 500px;
            width: 100%;
            margin: 0 auto;
          }
        }
        @media (max-width: 600px) {
          .project-features-list {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
