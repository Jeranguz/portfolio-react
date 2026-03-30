import { motion } from 'framer-motion';
import { personalInfo, education } from '../../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">01</span>
          <h2 className="section-heading">About</h2>
        </motion.div>

        <div className="about-body">
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="about-image-frame">
              <img src="/profile.png" alt="Jeremy Andrés Guzmán Vargas" />
            </div>
            <p className="about-image-caption">Jeremy Guzmán — 2024</p>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="about-bio">{personalInfo.bio}</p>
          </motion.div>
        </div>

        <motion.div
          className="about-education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="edu-label">Education</div>
          <div className="edu-body">
            <div className="edu-degree">{education.degree}</div>
            <div className="edu-institution">{education.institution}</div>
            <div className="edu-period">{education.period}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
