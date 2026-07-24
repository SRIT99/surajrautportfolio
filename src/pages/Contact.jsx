import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const GithubIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const FacebookIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', company: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const socials = [
    {
      name: 'GitHub',
      href: 'https://github.com/SRIT99',
      icon: GithubIcon,
      label: 'SRIT99',
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/surajrautdharan',
      icon: FacebookIcon,
      label: 'surajrautdharan',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/igsuraj.fx',
      icon: InstagramIcon,
      label: 'igsuraj.fx',
      color: '#E4405F'
    }
  ];

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Honeypot check — bots tend to fill every field, real users never see this one
    if (formData.company) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', company: '' });
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMsg('Please fill out all required fields.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || '(No subject)',
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', company: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg("Something went wrong sending your message. Please try again or email me directly.");
    }
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5, delay, ease: 'easeOut' }
  });

  return (
    <PageLayout
      title="Contact — Suraj Raut | Frontend Developer, Damak Nepal"
      description="Contact Suraj Raut — frontend developer available for internships and freelance work in Damak, Jhapa, and Dharan, Nepal."
    >
      <section className="section">
        <div className="container">
          <div className="label" style={{ marginBottom: '1rem' }}>Let's connect</div>
          <h1 className="section-title">Get in touch</h1>
          <p style={{ marginTop: '0.75rem', maxWidth: '520px', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Open to frontend internships, freelance projects, and collaboration. Based in Damak, Jhapa — available remotely.
          </p>

          <hr className="divider" style={{ margin: '2.5rem 0' }} />

          <div className="contact-grid">

            {/* Left — Info */}
            <motion.div {...fadeUp(0)} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 400, lineHeight: 1.3, marginBottom: '1rem' }}>
                  Want to work together?
                  <br />
                  <span style={{ color: 'var(--accent)' }}>I'd love to hear from you.</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  Whether you need a React frontend built from scratch, a UI bug fixed, or just want to talk about a project idea — send me a message.
                </p>
              </div>

              {/* Direct contacts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: 40, height: 40, background: 'var(--accent-dim)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <Mail size={17} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.15rem' }}>Email</div>
                    <a href="mailto:Surajworkspace12@gmail.com" style={{ fontSize: '0.94rem', color: 'var(--text-primary)', fontWeight: 500, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    >
                      Surajworkspace12@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: 40, height: 40, background: 'var(--blue-dim)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', flexShrink: 0 }}>
                    <MapPin size={17} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.15rem' }}>Location</div>
                    <div style={{ fontSize: '0.94rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      Damak, Jhapa / Dharan, Nepal
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <div className="label" style={{ marginBottom: '1rem' }}>Social</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {socials.map(s => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex', alignItems: 'center', gap: '0.85rem',
                          padding: '0.75rem 1rem',
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--bg-border)',
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--text-muted)',
                          transition: 'all 0.2s',
                          fontSize: '0.9rem'
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = s.color || 'var(--text-muted)';
                          e.currentTarget.style.color = s.color || 'var(--text-primary)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = 'var(--bg-border)';
                          e.currentTarget.style.color = 'var(--text-muted)';
                        }}
                      >
                        <Icon size={17} />
                        <span style={{ flex: 1 }}>{s.name}</span>
                        <span style={{ fontSize: '0.82rem', opacity: 0.7 }}>@{s.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div {...fadeUp(0.1)}>
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem'
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Send a message
                </h3>

                {/* Honeypot field — hidden from real users, bots tend to fill every input */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                  aria-hidden="true"
                />

                <div className="form-field">
                  <label className="form-label">Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="form-input" />
                </div>

                <div className="form-field">
                  <label className="form-label">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className="form-input" />
                </div>

                <div className="form-field">
                  <label className="form-label">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project inquiry / internship / collaboration" className="form-input" />
                </div>

                <div className="form-field">
                  <label className="form-label">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or what you have in mind..." rows={5} required className="form-input" />
                </div>

                {status === 'error' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--error)', fontSize: '0.85rem', background: 'rgba(224,85,85,0.08)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(224,85,85,0.2)' }}>
                    <AlertCircle size={15} />
                    {errorMsg || 'Please fill out all required fields.'}
                  </div>
                )}

                {status === 'success' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success)', fontSize: '0.85rem', background: 'rgba(92,184,122,0.08)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(92,184,122,0.2)' }}>
                    <CheckCircle size={15} />
                    Message sent! I'll reply shortly.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ marginTop: '0.25rem', justifyContent: 'center', width: '100%', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: 16, height: 16, border: '2px solid rgba(0,0,0,0.2)', borderTop: '2px solid #0D0D0D', borderRadius: '50%', animation: 'spin-btn 0.8s linear infinite', display: 'inline-block' }} />
                      Sending…
                    </span>
                  ) : (
                    <>
                      <Send size={15} />
                      Send message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 4rem;
          align-items: start;
        }
        @keyframes spin-btn {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
    </PageLayout>
  );
};

export default Contact;