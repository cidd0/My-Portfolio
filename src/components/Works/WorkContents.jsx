import './WorkContents.css';
import WorkCard from '../WorkCard/WorkCard';
import cafeImage from '../../assets/cafeWeb.png';
import loFoImage from '../../assets/loFo.png';
import TaskFlow from '../../assets/Thumbnail-TaskFlow.png';
import WebPortfolio from '../../assets/web-portfolio.png';
import CalmSpace from '../../assets/CalmSpace-Poster.png'; 
import Dental from '../../assets/AlvicDental.png';  


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
      title: "Lo-Fo Design",
      description: "A lost and found application helping users track and recover lost items through a user-friendly interface.",
      image: loFoImage,
      link: "/project/lofo-project",
    },
    {
      id: 'portfolio-design',
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills, built with React and modern web technologies.',
      image: WebPortfolio,
      link: '/project/portfolio-design',
      external: true,
    },
    {
      id: 'TaskFlow',
      title: "TaskFlow",
      description: "A productivity app designed to help users manage their tasks and projects efficiently with a sleek interface.",
      image: TaskFlow, 
      link: "/project/TaskFlow",
      external: true,
    },  
    {
      id: 'CalmSpace',
      title: "CalmSpace",
      description: "A mental wellness app providing users with resources and tools to manage stress and improve their mental health.",
      image: CalmSpace,
      link: "/project/CalmSpace",
    },
    {
      id:'Dental',
      title: "Dental Appointment Booking System",
      description: "A web application that allows patients to book, reschedule, and cancel dental appointments online with ease.",
      image: Dental,
      link: "/project/dental-appointment-booking-system",
    }

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