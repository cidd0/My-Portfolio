import React, { useState, useEffect } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('HOME');
  
  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'WORKS', id: 'works' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'RESUME', id: 'resume' }
  ];

  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveTab(sectionId.toUpperCase());
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; 

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(navItems[index].name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        Chan
      </div>
      
      <div className="navbar-menu">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`nav-item ${activeTab === item.name ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
      
      <div className="navbar-location">
        <div>Quezon City,</div>
        <div>Philippines</div>
      </div>
    </div>
  );
};

export default Navbar;