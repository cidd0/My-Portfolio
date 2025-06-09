import './Section.css';

const Section = ({ id, title, className = '', children }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section-container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;