import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Design',
      skills: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping']
    },
    {
      title: 'Tools',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop']
    },
    {
      title: 'Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    }
  ];

  return (
    <div className="skills-content">
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category.title}</h3>
          <div className="skills-list">
            {category.skills.map((skill, i) => (
              <div key={i} className="skill-item">{skill}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;