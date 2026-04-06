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

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => handleProjectClick(project.id)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && handleProjectClick(project.id)}
              aria-label={`View project: ${project.title}`}
            >
              {/* Full-bleed image */}
              <div className="project-card-img-wrap">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="project-card-img"
                  loading="lazy"
                  draggable="false"
                />
              </div>

              {/* Gradient overlay with content */}
              <div className="project-card-overlay">
                {/* Top meta */}
                <div className="project-card-top">
                  <span className="project-card-cat">{project.category}</span>
                  <span className="project-card-yr">{project.year}</span>
                </div>

                {/* Bottom content */}
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>

                  <div className="project-card-reveal">
                    <p className="project-card-desc">{project.description}</p>

                    <div className="project-card-tags">
                      {project.technologies.frontend?.slice(0, 2).map(tech => (
                        <span key={tech} className="tech-chip">{tech}</span>
                      ))}
                      {project.technologies.backend?.slice(0, 2).map(tech => (
                        <span key={tech} className="tech-chip">{tech}</span>
                      ))}
                      {project.technologies.devops?.slice(0, 1).map(tech => (
                        <span key={tech} className="tech-chip">{tech}</span>
                      ))}
                    </div>

                    <div className="project-card-cta">
                      View case <span className="project-card-arrow">→</span>
                    </div>
                  </div>
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
