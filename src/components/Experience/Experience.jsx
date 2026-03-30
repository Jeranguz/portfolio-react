import { motion } from 'framer-motion';
import { experience } from '../../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">03</span>
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        <div className="exp-list">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="exp-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="exp-index" aria-hidden="true">
                0{index + 1}
              </div>

              <div className="exp-main">
                <div className="exp-top">
                  <div className="exp-company-block">
                    <h3 className="exp-company">{exp.company}</h3>
                    <span className="exp-type-badge">{exp.type}</span>
                  </div>
                  <time className="exp-period">{exp.period}</time>
                </div>

                <h4 className="exp-role">{exp.role}</h4>
                <p className="exp-desc">{exp.description}</p>

                <div className="exp-tech">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
