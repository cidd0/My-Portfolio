import React from 'react';
import './Footer.css';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaDribbble, FaBehance } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Christian Dave L. Enriquez</h3>
            <p className="footer-phone">+63 966 224 3570</p>
          </div>
          
          <div className="footer-social">
            <h4 className="footer-heading">Socials</h4>
            <div className="social-links">
              <a href="mailto:christiandave.enriquez02@gmail.com" className="social-link">
                <MdEmail size={18} />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/christian-dave-enriquez/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/cidd0" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub size={18} />
                <span>Github</span>
              </a>
              <a href="https://www.behance.net/christienrique14" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaBehance size={18} />
                <span>Behance</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>© {currentYear} C.D. Enriquez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;