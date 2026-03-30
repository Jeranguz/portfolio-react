import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
    window.scrollTo(0, 0);
  };

  const total = String(projects.length).padStart(2, '0');

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">02</span>
          <h2 className="section-heading">Projects</h2>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-item"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              onClick={() => handleProjectClick(project.id)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && handleProjectClick(project.id)}
              aria-label={`View project: ${project.title}`}
            >
              <div className="project-item-top">
                <div className="project-num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                  <span>/{total}</span>
                </div>
                <div className="project-meta-row">
                  <span className="project-cat">{project.category}</span>
                  <span className="project-yr">{project.year}</span>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-foot">
                <div className="project-tech-row">
                  {project.technologies.frontend.slice(0, 3).map(tech => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                  {project.technologies.backend.slice(0, 2).map(tech => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                </div>
                <div className="project-cta" aria-hidden="true">
                  View case <span>→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
