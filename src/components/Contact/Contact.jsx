import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { FiMapPin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">05</span>
          <h2 className="section-heading">Contact</h2>
        </motion.div>

        <div className="contact-layout">
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="contact-headline">
              Got something<br />in mind?
            </h3>
            <p className="contact-sub">
              Available for freelance projects, full-time positions, and creative collaborations.
            </p>
          </motion.div>

          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-email"
              aria-label={`Enviar correo a ${personalInfo.email}`}
            >
              {personalInfo.email}
            </a>

            <div className="contact-links">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-item"
                >
                  {link.name}
                  <span aria-hidden="true"> ↗</span>
                </a>
              ))}
            </div>

            <div className="contact-location">
              <FiMapPin aria-hidden="true" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
