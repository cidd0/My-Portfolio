import { Link } from 'react-router-dom';
import './WorkCard.css';

const WorkCard = ({ project }) => {
    return (
        <div className="work-card">
            <div className="work-card-image">
                <img src={project.image} alt={project.title} className="work-card-img" />
            </div>
            <div className="work-card-content">
                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-description">{project.description}</p>
                {project.external ? (
                    <a href={project.link} className="work-card-link" target="_blank" rel="noopener noreferrer">View Project</a>
                ) : (
                    <Link to={project.link} className="work-card-link">View Project</Link>
                )}
                
            </div>
        </div>
    );
};

export default WorkCard;