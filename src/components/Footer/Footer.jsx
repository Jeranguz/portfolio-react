import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <p>{currentYear} {personalInfo.name}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
