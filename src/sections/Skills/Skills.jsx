import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiPostman, SiMysql  } from 'react-icons/si';

const skills = [
  <FaHtml5 color="#e34c26" size={40} key="html" />,
  <FaCss3Alt color="#1572b6" size={40} key="css" />,
  <FaJs color="#f7df1e" size={40} key="js" />,
  <FaReact color="#61dafb" size={40} key="react" />,
  <SiTailwindcss color="#38bdf8" size={40} key="tailwind" />,
  <SiMysql color="#4479a1" size={40} key="mysql" />,
  <FaFigma color="#a259ff" size={40} key="figma" />,
  <FaGithub color="black" size={40} key="github" />,
];

const Skills = () => (
  <div className="skills-scroll-container">
    <div className="skills-scroll-row">
      {skills.map((icon) => (
        <div className="skill-icon-item" key={icon.key}>
          {icon}
        </div>
      ))}
    </div>
  </div>
);

export default Skills;