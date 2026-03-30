import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">02</span>
          <h2 className="section-heading">Habilidades</h2>
        </motion.div>

        <div className="skills-technical">
          {skills.technical.items.map((item, index) => (
            <motion.div
              key={item.category}
              className="skill-row"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="skill-row-cat">{item.category}</div>
              <div className="skill-row-tags">
                {item.skills.map(skill => (
                  <span key={skill} className="tech-chip">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-soft"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="soft-label">Soft skills</div>
          <div className="soft-pills">
            {skills.soft.items.map((item, index) => (
              <motion.span
                key={item.name}
                className="soft-pill"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.07 }}
                title={item.description}
              >
                {item.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
