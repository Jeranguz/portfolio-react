import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        
        <div className="skills-content">
          <div className="technical-skills">
            <h3>{skills.technical.title}</h3>
            <div className="skills-grid">
              {skills.technical.items.map((item, index) => (
                <motion.div
                  key={item.category}
                  className="skill-category"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4>{item.category}</h4>
                  <div className="skill-tags">
                    {item.skills.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <h3>{skills.soft.title}</h3>
            <div className="soft-skills-grid">
              {skills.soft.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="soft-skill-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                >
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
