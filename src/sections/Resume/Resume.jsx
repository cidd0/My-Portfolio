import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-content">
      <div className="resume-header">
        <h3 className="resume-heading">My Experience</h3>
        <a 
          href="/files/ENRIQUEZ_CHRISTIAN_DAVE_RESUME.pdf"
          className="download-resume"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
      
      <div className="resume-timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">
            <span>Sept 2024</span>
            <span>Dec 2024</span>
          </div>
          <div className="timeline-content">
            <h3 className="timeline-title">Front-End Web Developer Intern</h3>
            <p className="timeline-company">USHER Technologies Inc.</p>
            <p className="timeline-description">
              Designed a user-friendly portal with a strong focus on navigation, accessibility, and usability. Developed wireframes and prototypes in Figma to visualize user flows. Collaborated closely with developers to ensure a seamless transition from design to development.
            </p>
            <div className="timeline-skills">
              <span className="skill-tag">UI Design</span>
              <span className="skill-tag">Wireframing</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Prototyping</span>
            </div>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">
            <span>Jan 2022</span>
            <span>June 2022</span>
          </div>
          <div className="timeline-content">
            <h3 className="timeline-title">Student Assistant</h3>
            <p className="timeline-company">Systems Plus Computer College</p>
            <p className="timeline-description">
              Provided administrative support during enrollment and student onboarding. Designed marketing materials using Canva, enhancing the school’s branding. Created layouts for both print and digital advertisements.
            </p>
            <div className="timeline-skills">
              <span className="skill-tag">Graphic Design</span>
              <span className="skill-tag">Computer Trouble Shooting</span>
              <span className="skill-tag">Collaboration</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="resume-divider">
        <span>Education</span>
      </div>
      
      <div className="resume-timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">
            <span>2021</span>
            <span>2025</span>
          </div>
          <div className="timeline-content">
            <h3 className="timeline-title">Bachelor of Science in Information Technology</h3>
            <p className="timeline-company">Systems Plus Computer College</p>
            <p className="timeline-description">
              I earned my Bachelor of Science in Information Technology from Systems Plus Computer College, where I gained foundational and practical knowledge in various areas of IT. I developed a solid understanding of programming, systems analysis, and web technologies, with hands-on experience in Arduino and Internet of Things (IoT) projects. I also built skills in project management, software design, and the implementation of effective web-based systems.
            </p>
            <div className="timeline-skills">
              <span className="skill-tag">Design Thinking</span>
              <span className="skill-tag">Visual Design</span>
              <span className="skill-tag">UX/UI Design</span>
            </div>
          </div>
        </div>
      </div>  

      <div className="resume-timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">
            <span>2021</span>
            <span>2022</span>
          </div>
          <div className="timeline-content">
            <h3 className="timeline-title">Bachelor of Science in Information Technology</h3>
            <p className="timeline-company">STI College Cubao</p>
            <p className="timeline-description">
              Completed first year coursework in Information Technology, building a strong foundation in programming fundamentals, computer systems, and basic design principles. Actively participated in tech-related student organizations and gained initial exposure to UI/UX concepts through introductory design projects.
            </p>
            <div className="timeline-skills">
              <span className="skill-tag">Programming Fundamentals</span>
              <span className="skill-tag">Computer Systems</span>
              <span className="skill-tag">Problem Solving</span>
            </div>
          </div>
        </div>
      </div>       
    </div>
  );
};

export default Resume;