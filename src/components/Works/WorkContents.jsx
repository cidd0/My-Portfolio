import { Link } from 'react-router-dom';
import './WorkContents.css';
import cafeImage from '../../assets/cafeWeb.png'; 
import loFoImage from '../../assets/loFo.png';

const WorkContents = () => {
  const projects = [
    {
      id: 'cafe-project', 
      title: "Cafe Web Design",
      description: "A website designed for a local cafe, featuring an intuitive interface for browsing the menu and Cafe's history. This project focused on creating a seamless user experience while maintaining the cafe's brand identity throughout the digital experience.",
      image: cafeImage,
      link: "/project/cafe-project"
    },
    {
      id: 'lofo-project', 
      title: "Lo-Fo App",
      description: "A lost and found application helping users track and recover lost items through a user-friendly interface and notification system. The design prioritizes simplicity and accessibility, making it easy for users to report lost items or find items they've discovered.",
      image: loFoImage,
      link: "/project/lofo-project"
    },
  ];

  return (
    <div className="work-contents">
      {projects.map(project => (
        <div key={project.id} className="work-item">
          <div className="work-image-container">
            <img 
              src={project.image} 
              alt={project.title} 
              className="work-image" 
            />
          </div>
          <div className="work-details">
            <h3 className="work-title">{project.title}</h3>
            <p className="work-description">
              {project.description}
            </p>
            <Link to={project.link} className="work-link">View Project</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkContents;