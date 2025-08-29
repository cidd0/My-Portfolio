import './WorkContents.css';
import WorkCard from '../WorkCard/WorkCard';
import cafeImage from '../../assets/cafeWeb.png';
import loFoImage from '../../assets/loFo.png';
import TaskFlow from '../../assets/Thumbnail-TaskFlow.png';

const WorkContents = () => {
  const projects = [
    {
      id: 'cafe-project',
      title: "Cafe Web Design",
      description: "A website designed for a local cafe, featuring an intuitive interface for browsing the menu and Cafe's history.",
      image: cafeImage,
      link: "/project/cafe-project",
    },
    {
      id: 'lofo-project',
      title: "Lo-Fo App",
      description: "A lost and found application helping users track and recover lost items through a user-friendly interface.",
      image: loFoImage,
      link: "/project/lofo-project",
    },
    {
      id: 'TaskFlow',
      title: "TaskFlow",
      description: "A productivity app designed to help users manage their tasks and projects efficiently with a sleek interface.",
      image: TaskFlow, 
      link: "https://taskflow-system.vercel.app/",
      external: true,
    },  




  ];

  return (
    <div className="work-contents">
      {projects.map((project) => (
        <WorkCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default WorkContents;