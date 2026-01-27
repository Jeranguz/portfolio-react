import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} {personalInfo.name}. Todos los derechos reservados.</p>
          <p className="footer-tagline">Construido con React, Framer Motion y ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
