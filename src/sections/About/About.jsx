import './About.css';

const About = () => {
  return (
    <div className="about-content">
      <div className="about-section">
        <div className="about-left">
          <h2>Design with purpose.</h2>
          <h2>Create with passion.</h2>
          <h2>Grow with intention.</h2>
        </div>
        
        <div className="about-right">
          <p>
            Hi, I'm Dave Enriquez — a self-taught front-end developer and aspiring UX/UI designer.

            While I don't have professional experience yet, I've spent time learning the foundations of design and development through personal projects and continuous practice. I enjoy creating clean, user-friendly interfaces that solve real problems and make digital experiences more enjoyable.

            I'm passionate about design, eager to grow, and always open to learning from new challenges. Whether it's improving my skills or collaborating with others, I'm ready to take the next step in my creative journey.
          </p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-left">
          <h2>2021 - Present</h2>
        </div>
        
        <div className="about-right">
          <h2>Aspiring UX/UI Designer</h2>
          <h3>Remote</h3>
          <p>
            Since my first year of college, I've been designing websites and crafting user interfaces as part of personal and academic projects. Through continuous practice and learning, I've built a solid foundation in UX research, UI design, and prototyping—using tools like Figma and applying real-world design thinking to every project I create.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;