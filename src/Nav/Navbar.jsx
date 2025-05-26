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

  // Function to scroll to section with offset for navbar height
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the navbar height to use as offset
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      // Calculate the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      // Calculate the absolute position by adding current scroll position
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      
      // Scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveTab(sectionId.toUpperCase());
  };

  // Optional: Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

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
      {/* Logo/Name */}
      <div className="navbar-logo">
        Chan
      </div>
      
      {/* Navigation Pills */}
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
      
      {/* Location */}
      <div className="navbar-location">
        <div>Quezon City,</div>
        <div>Philippines</div>
      </div>
    </div>
  );
};

export default Navbar;