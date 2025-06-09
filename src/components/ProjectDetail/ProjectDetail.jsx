import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';
import CafeWeb from '../../assets/Cafe Web.png';
import LoFoImage from '../../assets/Lo-Fo.png';

const ProjectDetail = () => {
  const { id } = useParams();

  const projectsData = [
      {
      id: 'cafe-project',
      title: "Cafe Web Design",
      subtitle: "Web Design | UX/UI Design",
      description: "A creative concept for a local cafe website, focused on delivering a simple and user-friendly browsing experience. The design allows users to view the cafe’s menu, learn about its history, and find its location — all while maintaining consistent branding and visual identity throughout.",
      image: CafeWeb,
      fullDescription: `
        <h3>Project Overview</h3>
        <p>This Cafe Web Design is a self-initiated concept project created to explore and practice web and UI design. It represents my vision of a clean, informative, and brand-consistent website for a local cafe, showcasing my creativity and early design skills.</p>
        
        <h3>The Challenge</h3>
        <p>The goal was to create a visually engaging layout that made key information — such as the menu, cafe story, and location — easy to find and pleasant to browse. Since this was a personal project, I had full creative freedom to imagine the branding, layout, and overall structure.</p>
        
        <h3>My Approach</h3>
        <p>I started by defining the cafe’s brand tone and aesthetic in my mind — warm, cozy, and inviting. From there, I planned the user experience and created wireframes and mockups. I focused on responsive design, intuitive navigation, and visual consistency to ensure the site would feel professional and user-friendly.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Simple, accessible digital menu layout</li>
          <li>Interactive location section with map and contact details</li>
          <li>Informative page about the cafe’s story and values</li>
          <li>Responsive and clean design for all screen sizes</li>
          <li>Consistent branding with thoughtful color palette and typography</li>
        </ul>

        <h3>Next Steps</h3>
        <p>As this is a concept project, I plan to revise and improve the design with updated UI techniques, animations, and possibly interactive elements. It may also be developed into a live demo in the future.</p>
      `,
      tools: ["Figma"],
      timeline: "3 Days",
      year: "2022",
      demoLink: "https://www.figma.com/design/pJDbqNUg2rlOwMYb8A1IwB/Deskop-ver.-Cafe-website?node-id=0-1&t=oTvGoAZ4omjB19CW-1"
    },
    {
    id: 'lofo-project',
    title: "Lo-Fo App",
    subtitle: "Web App Design | UX/UI Design",
    description: "A lost and found application helping users track and recover lost items through a user-friendly interface. The design prioritizes simplicity and accessibility, making it easy for users to report lost items or find items they've discovered.",
    image: LoFoImage,
    fullDescription: `
      <h3>Project Overview</h3>
      <p>LO-FO is a web-based lost and found concept designed to help individuals report and find lost items with ease. This UI/UX project showcases a clean, intuitive design layout where users can either submit a report for a lost item or browse through reported items.</p>
      
      <h3>The Challenge</h3>
      <p>The key challenge was to design a user flow that allows quick reporting of lost items and simple browsing of found items, without overwhelming the user. Accessibility and clarity were major considerations throughout the design process.</p>
      
      <h3>My Approach</h3>
      <p>I began by sketching the primary user flows: reporting a lost item, viewing lost items, and viewing detailed information about each item. The layout emphasizes minimalism, visual clarity, and ease of navigation. Grids were used for precise alignment, and UI components were kept consistent throughout the pages.</p>
      
      <h3>Key Screens</h3>
      <ul>
        <li>Landing page with clear CTA options: “Report Lost Item” and “View Lost Items”</li>
        <li>Form-based submission page for reporting lost items</li>
        <li>Lost items dashboard displaying item cards with images</li>
        <li>Item details page with photo, description, and action buttons</li>
        <li>Pop-up confirmation dialogues for submission or user actions</li>
      </ul>

      <h3>Next Steps</h3>
      <p>This is an initial visual concept created using Figma. The next phase involves improving responsiveness, adding interactivity, and potentially implementing features like location-based sorting, user messaging, or account profiles.</p>
    `,
    tools: ["Figma"],
    timeline: "2 Weeks",
    year: "2023",
    demoLink: "https://www.figma.com/design/vj8ucvpIRwEbroY8sZrf0U/Lost-and-Found?node-id=0-1&t=rMziSZgooCHcBELf-1"
    },
      ];
      
  const project = projectsData.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>Sorry, the project you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    );
  }
  
  return (
    <div className="project-detail">
      <div className="project-header">
        <Link to="/#works" className="back-button">
          ← Back to Projects
        </Link>
        <h1 className="project-title">{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>
      
      <div className="project-hero">
        <img src={project.image} alt={project.title} className="project-hero-image" />
      </div>
      
      <div className="project-content">
        <div className="project-main">
          <div 
            className="project-description" 
            dangerouslySetInnerHTML={{ __html: project.fullDescription }} 
          />
          
          <div className="project-info">
            <h3 className="project-info-title">Project Details</h3>
            <div className="project-info-grid">
              <div className="info-item">
                <span className="info-label">Timeline:</span>
                <span className="info-value">{project.timeline}</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">Year:</span>
                <span className="info-value">{project.year}</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">Tools:</span>
                <div className="tools-list">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="project-links">
              {project.demoLink && (
                <a href={project.demoLink} className="project-link primary-link" target="_blank" rel="noopener noreferrer">
                  View Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;