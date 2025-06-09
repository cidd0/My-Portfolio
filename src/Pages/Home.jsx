import React, { useState } from 'react';
import Button from '../components/Button/Button'; 
import './Home.css';
import profileImage from '../assets/grad.jpg'; 

const Home = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [formStatus, setFormStatus] = useState(null); 
  
  const scrollToWorks = () => {
    document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
  };
  
  const openContactModal = () => {
    setShowContactModal(true);
    setFormStatus(null); 
  };
  
  const closeContactModal = () => {
    setShowContactModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const form = e.target;
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        // Close modal after success message is shown for 3 seconds
        setTimeout(() => {
          closeContactModal();
          setFormStatus(null);
        }, 3000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="hero-content">
      <div className="hero-text">
        <h1 className="hero-title">
          Hi, I'm Christian, a UX/UI Designer
        </h1>
        <p className="hero-subtitle">passionate about clean, intuitive interfaces.</p>
        <div className="button-group">
          <Button variant="primary" onClick={scrollToWorks}>
            View Projects
          </Button>
          <Button variant="secondary" onClick={openContactModal}>
            Let's Talk
          </Button>
        </div>
      </div>
      <div className="profile-image">
        <img src={profileImage} alt="Christian - UX/UI Designer" />
      </div>
      
      {showContactModal && (
        <div className="modal-overlay" onClick={closeContactModal}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeContactModal}>×</button>
            <h2>Get In Touch</h2>
            
            {formStatus === 'success' && (
              <div className="form-status success">
                <p>Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="form-status error">
                <p>Something went wrong. Please try again or email me directly.</p>
              </div>
            )}
            
            {formStatus !== 'success' && (
              <form className="contact-form" action="https://formspree.io/f/xkgbjrbk" method="POST" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required></textarea>
                </div>
                <Button 
                  variant="primary" 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;