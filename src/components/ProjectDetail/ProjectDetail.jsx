import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';
import cafeWeb from '../../assets/cafeWeb.png';
import loFoImage from '../../assets/loFo.png';
import WebPortfolio from '../../assets/web-portfolio.png';
import TaskFlow from '../../assets/ProjectDetailsImage/TaskFlow-MockUp-NoBG.png';
import CalmSpace from '../../assets/ProjectDetailsImage/CalmSpace-MockUp-Iphone.png';
import Dental from '../../assets/ProjectDetailsImage/AlvicDental-MockUp.png';

const ProjectDetail = () => {
  const { id } = useParams();

  const projectsData = [
    {
      id: 'cafe-project',
      title: "Cafe Web Design",
      subtitle: "Web Design | UX/UI Design",
      description: "A creative concept for a local cafe website, focused on delivering a simple and user-friendly browsing experience. The design allows users to view the cafe’s menu, learn about its history, and find its location — all while maintaining consistent branding and visual identity throughout.",
      image: cafeWeb,
      fullDescription: `
        <h3>Project Overview</h3>
        <p>This Cafe Web Design is a self-initiated concept project created to explore and practice web and UI design. It represents my vision of a clean, informative, and brand-consistent website for a local cafe, showcasing my creativity and early design skills.</p>
        
        <h3>The Challenge</h3>
        <p>The goal was to create a visually engaging layout that made key information — such as the menu, cafe story, and location — easy to find and pleasant to browse. Since this was a personal project, I had full creative freedom to imagine the branding, layout, and overall structure.</p>
        
        <h3>My Approach</h3>
        <p>I started by defining the cafe’s brand tone and aesthetic in my mind — warm, cozy, and inviting. From there, I planned the user experience and created wireframes and mockups. I focused on responsive design, navigation, and visual consistency to ensure the site would feel professional and user-friendly.</p>
        
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
      title: "Lo-Fo Design",
      subtitle: "Web App Design | UX/UI Design",
      description: "A lost and found application helping users track and recover lost items through a user-friendly interface. The design prioritizes simplicity and accessibility, making it easy for users to report lost items or find items they've discovered.",
      image: loFoImage,
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
    {
      id: 'portfolio-design',
      title: "Portfolio Design",
      description: 'A personal portfolio website showcasing my projects and skills, built with React and modern web technologies.',
      image: WebPortfolio,
      fullDescription: `
      <h3>Project Overview</h3>
       <p>LO-FO is a web-based lost and found concept designed to help individuals report and find lost items with ease. This UI/UX project showcases a clean, intuitive design layout where users can either submit a report for a lost item or browse through reported items.</p>
      
      <h3>The Challenge</h3>
      <p>The key challenge was to design a user flow that allows quick reporting of lost items and simple browsing of found items, without overwhelming the user. Accessibility and clarity were major considerations throughout the design process.</p>
      
      <h3>My Approach</h3>
      <p>I started thinking who I am as a designer. I thought of the quote that says "Less is more", as a designer, my forte is being simple but has an impact to the users that makes sure that everything that the user needs is in the design even if its simple and minimal.</p>
      
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
      tools: ["Figma", "Visual Studio Code", "ReactJS", "CSS"],
      timeline: "1 Week",
      year: "2025",
      demoLink: "https://www.figma.com/design/vj8ucvpIRwEbroY8sZrf0U/Lost-and-Found?node-id=0-1&t=rMziSZgooCHcBELf-1"
    },
    {
      id: 'TaskFlow',
      title: "TaskFlow",
      subtitle: "Web App Design | UX/UI Design",
      description: "A productivity app designed to help users manage their tasks and projects efficiently with a sleek interface.",
      image: TaskFlow,
      fullDescription: `
      <h3>Project Overview</h3>
      <p>LO-FO is a web-based lost and found concept designed to help individuals report and find lost items with ease. This UI/UX project showcases a clean, intuitive design layout where users can either submit a report for a lost item or browse through reported items.</p>

      <h3>The Challenge</h3>
      <p>The challenge while designing TaskFlow is there are a lot of realization in handling tasks, I didn't realize it at first because I was too focused on CRUD functionality of this design.</p>

      <h3>My Approach</h3>
      <p>The goal is to use the CRUD method in this Web App Design. I focused more on making this design functional for development and user-friendliness. The target users are the one's who has a large amount of tasks like college students, high school students, and of course this can be also used by a person who is working and has a lot of tasks to handle.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Status cards: Completed Tasks, Todos, Due Soon</li>
        <li>Task management with add, edit, delete functionality</li>
        <li>Project categorization and filtering based on priority level</li>
        <li>Bar chart for the levels of tasks based on Priority level</li>
      </ul>

      <h3>Next Steps</h3>
      <p>Will add a account soon, so many people can use it and add a drag and drop tasks management based on progress of each tasks.</p>
      `,
      tools: ["Figma", "Visual Studio Code", "ReactJS", "MySQL", "CSS"],
      timeline: "3 Weeks",
      year: "2025",
      demoLink: "https://taskflow-system.vercel.app/"
    },
    {
      id: 'CalmSpace',
      title: "CalmSpace",
      subtitle: "Mobile App Design | UX/UI Design",
      description: "A mental wellness app providing users with resources and tools to manage stress and improve their mental health.",
      image: CalmSpace,
      fullDescription: `
      <h3>Project Overview</h3>
      <p>CalmSpace is a mobile app concept designed to provide users with resources and tools to manage stress and improve their mental health. The design focuses on creating a calming and supportive user experience, with easy access to wellness content and features.</p>

      <h3>The Challenge</h3>
      <p>The challenge was to design an app that feels welcoming and non-intimidating, while also providing valuable resources for mental wellness. The user interface needed to be simple and intuitive, allowing users to easily navigate through different sections of the app.</p>

      <h3>My Approach</h3>
      <p>I started by researching existing mental wellness apps to understand common features and design patterns. I then started doing surveys to my target users to know what features they're looking for based on their age range.</p>

      <h3>Full Details, coming soon.</h3>
      `,
      tools: ["Figma", "User Reasearch"],
      timeline: "1 Weeks",
      year: "2024",
      demoLink: "https://www.figma.com/proto/3mJHk1b0yYH5Y5Yk1ZkLhJ/CalmSpace?page-id=0%3A1&node-id=2%3A2&viewport=241%2C48%2C0.11&scaling=scale-down-width&starting-point-node-id=2%3A2&show-proto-sidebar=1"
    },
    {
      id: 'Dental',
      title: "Dental Appointment Booking System",
      subtitle: "Web App Design | UX/UI Design",
      description: "A web application that allows patients to book, reschedule, and cancel dental appointments online with ease.",
      image: Dental,
      fullDescription: `
      <h3>Project Overview</h3>
      <p>Dental Appointment Booking System is a web application designed to streamline the process of booking, rescheduling, and canceling dental appointments. The design focuses on user convenience, allowing patients to manage their appointments with ease through an intuitive interface.</p>

      <h3>The Challenge</h3>
      <p>The challenge was to create a user-friendly experience that minimizes the steps required to book or modify an appointment. The interface needed to be clear and straightforward, ensuring that users of all ages could navigate the system without confusion.</p> 

      <h3>My Approach</h3>
      <p>I began by mapping out the user journey, identifying key touchpoints such as appointment selection, date and time picking, and confirmation. I focused on creating a clean layout with clear calls to action, ensuring that users could easily find and complete their desired tasks.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Simple appointment booking form with date and time selection</li>
        <li>Option to reschedule or cancel existing appointments</li>
        <li>Reminder notifications</li>
        <li>Responsive design for accessibility on all devices</li>
      </ul>

      <h3>Next Steps</h3>
      <p>This project was submitted as a capstone project. The next steps for this Web Portal is have more user-friendly design and improve the admin side that will have an AI to predict the services trends.</p>
      `
      ,      
      tools: ["Figma"],
      timeline: "1 Month",
      year: "2024",
      demoLink: "https://www.figma.com/design/ETBEki5FciLkQuIhpNRRii/DENTAL-APPOINTMENT-CLIENT-VIEW?node-id=0-1&t=wzeq8jAtCQ63XEZP-1"
    }
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
    <div className="project-detail-wrapper">

      <div className="blur-circle circle-1"></div>
      <div className="blur-circle circle-2"></div>

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
    </div>
  );
};

export default ProjectDetail;