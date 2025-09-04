import { Link } from 'react-router-dom';
import './WorkCard.css';

const WorkCard = ({ project }) => {

    if(!project.id) return null;

    return (
        <div className="work-card">
            <div className="work-card-image">
                <img src={project.image} alt={project.title} className="work-card-img" />
                <div className="project-tag">
                    {project.external ? 'Live Site' : 'Figma Design'}
                </div>
            </div>
            <div className="work-card-content">
                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-description">{project.description}</p>      
                    <Link to={`/project/${project.id}`} className="work-card-link">View Project</Link>             
            </div>
        </div>
    );
};

export default WorkCard;