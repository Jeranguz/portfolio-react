import { motion } from 'framer-motion';
import { experience } from '../../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experiencia</h2>
        
        <div className="timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <span className="timeline-badge">{exp.type}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p className="timeline-period">{exp.period}</p>
                <p className="timeline-description">{exp.description}</p>
                
                <div className="timeline-tech">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
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
