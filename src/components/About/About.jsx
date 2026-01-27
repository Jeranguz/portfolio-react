import { motion } from 'framer-motion';
import { personalInfo, education } from '../../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Sobre Mí</h2>
          
          <div className="about-content">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="/profile.png" alt="Jeremy Andrés Guzmán Vargas" />
            </motion.div>
            
            <div className="about-text">
              <motion.p
                className="about-bio"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {personalInfo.bio}
              </motion.p>

              <motion.div
                className="about-education"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3>Educación</h3>
                <div className="education-item">
                  <h4>{education.degree}</h4>
                  <p className="education-institution">{education.institution}</p>
                  <p className="education-period">{education.period}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
