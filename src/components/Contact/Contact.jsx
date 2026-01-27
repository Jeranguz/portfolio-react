import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Hablemos</h3>
            <p>¿Tienes un proyecto en mente? Me encantaría escucharlo.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
              
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
            
            <div className="contact-social">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
