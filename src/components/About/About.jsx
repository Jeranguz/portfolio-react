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
            <div className="about-text">
              <p className="about-bio">{personalInfo.bio}</p>
              
              <div className="about-story">
                <h3>Mi Historia</h3>
                {personalInfo.story.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <div className="about-education">
                <h3>Educación</h3>
                <div className="education-item">
                  <h4>{education.degree}</h4>
                  <p className="education-institution">{education.institution}</p>
                  <p className="education-period">{education.period}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
