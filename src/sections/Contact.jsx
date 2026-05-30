import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const GithubIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const FacebookIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const InstagramIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const socialLinks = [
    { name: 'GitHub', Icon: GithubIcon, href: 'https://github.com/SRIT99', color: '#fff' },
    { name: 'Facebook', Icon: FacebookIcon, href: 'https://facebook.com/surajrautdharan', color: '#1877F2' },
    { name: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com/igsuraj.fx', color: '#E4405F' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    // Simulate API Submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: '#0F172A', position: 'relative' }}>
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
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Get in Touch</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: '#fff', marginTop: '0.5rem' }}>Contact Me</h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--gradient-primary)', margin: '1rem auto 0 auto', borderRadius: '2px' }} />
        </div>

        {/* Content Layout Grid */}
        <div className="grid-2" style={{ gap: '4rem' }}>
          
          {/* Left Column: Direct info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', color: '#fff', marginBottom: '1.25rem', lineHeight: '1.3' }}>
              Interested in working together? <br />
              <span className="gradient-text">Let's build something meaningful.</span>
            </h3>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
              Whether you are preparing a software internship, have a freelance platform concept to construct, or want to integrate robust database backends, I am ready to collaborate. Feel free to reach out directly.
            </p>

            {/* Direct details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.08)', color: 'var(--primary)', padding: '0.75rem', borderRadius: '10px' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email Me</div>
                  <a href="mailto:Surajworkspace12@gmail.com" style={{ fontSize: '1rem', color: '#fff', fontWeight: 500 }}>
                    Surajworkspace12@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.08)', color: 'var(--blue)', padding: '0.75rem', borderRadius: '10px' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Location</div>
                  <div style={{ fontSize: '1rem', color: '#fff', fontWeight: 500 }}>
                    Damak, Jhapa, Nepal
                  </div>
                </div>
              </div>
            </div>

            {/* Social icons row */}
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 500 }}>
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
                      className="glass-panel"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-muted)',
                        background: 'rgba(17, 24, 39, 0.45)',
                        border: '1px solid rgba(255, 255, 255, 0.04)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = social.color;
                        e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-muted)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                background: 'rgba(17, 24, 39, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.04)'
              }}
            >
              {/* Form Input fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 500 }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  style={{
                    background: 'rgba(11, 18, 32, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: '#fff',
                    outline: 'none',
                    transition: 'all 0.2s'
                  }}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 500 }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  style={{
                    background: 'rgba(11, 18, 32, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: '#fff',
                    outline: 'none',
                    transition: 'all 0.2s'
                  }}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 500 }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / collaboration request"
                  style={{
                    background: 'rgba(11, 18, 32, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: '#fff',
                    outline: 'none',
                    transition: 'all 0.2s'
                  }}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 500 }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, ideas, or questions here..."
                  rows={4}
                  required
                  style={{
                    background: 'rgba(11, 18, 32, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: '#fff',
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
                  Please fill out all required fields.
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
                  justifyContent: 'center',
                  padding: '0.85rem'
                }}
              >
                {status === 'sending' ? (
                  <div className="spinner" style={{ border: '2px solid rgba(255,255,255,0.2)', borderTop: '2px solid #fff', borderRadius: '50%', width: '18px', height: '18px', animation: 'spin 1s linear infinite' }} />
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
        .form-input:focus {
          border-color: rgba(16, 185, 129, 0.3) !important;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Contact;
