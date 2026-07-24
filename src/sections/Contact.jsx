import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

/* ==========================================
   CUSTOM INLINE SVG COMPONENTS
   ========================================== */
const GithubIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const FacebookIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const InstagramIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

/* ==========================================
   CONTACT COMPONENT
   ========================================== */
const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '' // honeypot field - real users never fill this in
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const socialLinks = [
    { name: 'GitHub', Icon: GithubIcon, href: 'https://github.com/SRIT99', color: 'var(--text-primary)' },
    { name: 'Facebook', Icon: FacebookIcon, href: 'https://facebook.com/surajrautdharan', color: '#1877F2' },
    { name: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com/igsuraj.fx', color: '#E4405F' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check - if this hidden field got filled, it's a bot. Silently "succeed" without sending.
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
      setErrorMsg('Something went wrong sending your message. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="section-padding contact-section-bg" style={{ position: 'relative' }}>
      {/* Separator line mapped to variables */}
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
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Get in Touch</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--text-primary)', marginTop: '0.5rem', fontWeight: 700 }}>Contact Me</h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--gradient-primary)', margin: '1rem auto 0 auto', borderRadius: '2px' }} />
        </div>

        {/* Content Layout Grid */}
        <div className="portfolio-contact-grid" style={{ gap: 'clamp(2rem, 5vw, 4rem)' }}>

          {/* Left Column: Direct info & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: '1.3', fontWeight: 600 }}>
              Interested in working together? <br />
              <span className="gradient-text">Let's build something meaningful.</span>
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
              Whether you are preparing a software internship, have a freelance platform concept to construct, or want to integrate robust database backends, I am ready to collaborate. Feel free to reach out directly.
            </p>

            {/* Direct details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="contact-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.08)', color: 'var(--primary)', padding: '0.75rem', borderRadius: '10px', display: 'flex' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Me</div>
                  <a href="mailto:Surajworkspace12@gmail.com" style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none' }} className="contact-link">
                    Surajworkspace12@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="contact-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.08)', color: 'var(--blue, #3B82F6)', padding: '0.75rem', borderRadius: '10px', display: 'flex' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</div>
                  <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                    Damak, Jhapa, Nepal
                  </div>
                </div>
              </div>
            </div>

            {/* Social icons row */}
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                Social Connections
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {socialLinks.map((social) => {
                  const IconComp = social.Icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-card"
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--separator)',
                        background: 'var(--social-btn-bg)',
                        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = social.color;
                        e.currentTarget.style.borderColor = social.color;
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = `0 4px 12px ${social.color}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-muted)';
                        e.currentTarget.style.borderColor = 'var(--separator)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      title={social.name}
                    >
                      <IconComp size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card contact-form-card"
              style={{
                padding: 'clamp(1.5rem, 5vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                border: '1px solid var(--separator)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              {/* Honeypot field - hidden from real users via CSS, bots tend to fill every field */}
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

              {/* Form Input fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  style={{
                    background: 'var(--input-bg)',
                    border: '1px solid var(--separator)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    transition: 'all 0.2s'
                  }}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  style={{
                    background: 'var(--input-bg)',
                    border: '1px solid var(--separator)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    transition: 'all 0.2s'
                  }}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / collaboration request"
                  style={{
                    background: 'var(--input-bg)',
                    border: '1px solid var(--separator)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    transition: 'all 0.2s'
                  }}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, ideas, or questions here..."
                  rows={4}
                  required
                  style={{
                    background: 'var(--input-bg)',
                    border: '1px solid var(--separator)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    transition: 'all 0.2s',
                    resize: 'none'
                  }}
                  className="form-input"
                />
              </div>

              {/* Status Feedback alerts */}
              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#EF4444', fontSize: '0.85rem', background: 'rgba(239, 68, 68, 0.08)', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid rgba(239, 68, 68, 0.15)' }}>
                  <AlertCircle size={16} />
                  {errorMsg || 'Please fill out all required fields.'}
                </div>
              )}

              {status === 'success' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.85rem', background: 'rgba(16, 185, 129, 0.08)', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                  <CheckCircle size={16} />
                  Message sent successfully! I will reply shortly.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
                style={{
                  marginTop: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'sending' ? (
                  <div className="spinner" style={{ border: '2px solid rgba(255,255,255,0.2)', borderTop: '2px solid currentColor', borderRadius: '50%', width: '18px', height: '18px', animation: 'spin 1s linear infinite' }} />
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <style>{`
        /* --- Responsive Structural Layout Adjustments --- */
        .portfolio-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        
        @media (max-width: 991px) {
          .portfolio-contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }

        /* --- Theme Protection & Design Rules --- */
        .contact-section-bg {
          background: var(--section-mid, var(--section-dark)) !important;
        }

        /* Default Dark Mode Card/Button Elevations */
        .contact-form-card {
          background: rgba(255, 255, 255, 0.03) !important;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
          --input-bg: rgba(0, 0, 0, 0.2);
        }
        
        #contact {
          --social-btn-bg: rgba(255, 255, 255, 0.02);
        }

        /* Light Mode Layout Overrides */
        .light #contact, [data-theme="light"] #contact {
          --text-primary: #0F172A;
          --text-muted: #64748B;
          --separator: rgba(15, 23, 42, 0.08);
          --social-btn-bg: #F8FAFC;
        }

        .light .contact-form-card, [data-theme="light"] .contact-form-card {
          background: #ffffff !important;
          box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.08) !important;
          --input-bg: #F8FAFC;
        }

        .light .contact-icon-wrapper, [data-theme="light"] .contact-icon-wrapper {
          background: rgba(16, 185, 129, 0.12) !important;
        }

        /* --- Global Interaction Rules --- */
        .form-input:focus {
          border-color: var(--primary) !important;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15) !important;
        }
        
        .light .form-input:focus, [data-theme="light"] .form-input:focus {
          background: #ffffff !important;
        }
        
        .contact-link:hover {
          color: var(--primary) !important;
          text-decoration: underline !important;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;