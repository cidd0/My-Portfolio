import React from 'react';
import Navbar from '../Nav/Navbar.jsx';
import './Portfolio.css';
import profileImage from '../assets/grad.jpg'; 

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="section-container">
          {/* Your hero content */}
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm Christian, a UX/UI Designer
              </h1>
              <p className="hero-subtitle">passionate about clean, intuitive interfaces.</p>
              <div className="button-group">
                <button className="primary-button">
                  View Projects
                </button>
                <button className="secondary-button">
                  Let's Talk
                </button>
              </div>
            </div>
            <div className="profile-image">
              <img src={profileImage} alt="Christian - UX/UI Designer" />
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="section works-section">
        <div className="section-container">
          <h2 className="section-title">My Works</h2>
          {/* Projects content */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          {/* About content */}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <h2 className="section-title">Skills</h2>
          {/* Skills content */}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="section resume-section">
        <div className="section-container">
          <h2 className="section-title">Resume</h2>
          {/* Resume */}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;