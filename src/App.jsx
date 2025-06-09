import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Nav/Navbar';
import Section from './components/Section/Section';
import Home from './Pages/Home';
import Works from './sections/Works/Works';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Resume from './sections/Resume/Resume';
import Footer from './layouts/Footer/Footer';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/" element={
          <div className="portfolio-container">
            <Navbar />
            
            <Section id="home" className="home-section">
              <Home />
            </Section>
            
            <Section id="works" className="works-section" title="My Works">
              <Works />
            </Section>
            
            <Section id="about" className="about-section" title="About Me">
              <About />
            </Section>
            
            <Section id="skills" className="skills-section" title="Skills">
              <Skills />
            </Section>
            
            <Section id="resume" className="resume-section" title="Resume">
              <Resume />
            </Section>
            
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
