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
        <h2 className="section-title">Proyectos</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.1 } }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>
              
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-role">
                <strong>Rol:</strong> {project.role}
              </div>
              
              <div className="project-tech">
                <strong>Tecnologías:</strong>
                <div className="tech-stack">
                  {project.technologies.frontend.slice(0, 3).map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.backend.slice(0, 2).map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-results">
                <strong>Resultados:</strong>
                <ul>
                  {project.results.slice(0, 2).map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
