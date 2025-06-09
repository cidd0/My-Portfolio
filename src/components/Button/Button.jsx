import './Button.css';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  return (
    <button 
      className={`button ${variant}-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;