import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Proyecto no encontrado</h2>
        <button onClick={handleBackClick} className="btn-back">Volver al inicio</button>
      </div>
    );
  }

  // Imágenes de stock para mockups de diseño
  const mockupImages = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80'
  ];

  return (
    <motion.div 
      className="project-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <button onClick={handleBackClick} className="btn-back">
            ← Volver
          </button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="project-meta">
              <span className="project-category">{project.category}</span>
              <span className="project-year">{project.year}</span>
            </div>
            
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.description}</p>
            
            <div className="project-quick-info">
              <div className="info-item">
                <strong>Rol</strong>
                <p>{project.role}</p>
              </div>
              <div className="info-item">
                <strong>Metodología</strong>
                <p>{project.methodology}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <motion.section 
        className="project-featured-image"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="container">
          <img 
            src={mockupImages[0]} 
            alt={`${project.title} - Vista principal`}
            className="featured-img"
          />
        </div>
      </motion.section>

      {/* Problem & Solution */}
      <section className="project-section">
        <div className="container">
          <div className="two-column">
            <motion.div 
              className="column"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="section-subtitle">El Problema</h2>
              <p>{project.problem}</p>
            </motion.div>
            
            <motion.div 
              className="column"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="section-subtitle">La Solución</h2>
              <p>{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="project-section project-tech-section">
        <div className="container">
          <h2 className="section-title">Stack Tecnológico</h2>
          
          <div className="tech-categories">
            <motion.div 
              className="tech-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>Frontend</h3>
              <div className="tech-tags">
                {project.technologies.frontend.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="tech-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>Backend</h3>
              <div className="tech-tags">
                {project.technologies.backend.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="tech-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3>DevOps</h3>
              <div className="tech-tags">
                {project.technologies.devops.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Showcase */}
      <section className="project-section project-showcase">
        <div className="container">
          <h2 className="section-title">Diseño y Desarrollo</h2>
          
          <motion.div 
            className="showcase-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="showcase-item">
              <img src={mockupImages[1]} alt="Dashboard mockup" />
              <p className="showcase-caption">Dashboard y visualización de datos</p>
            </div>
            <div className="showcase-item">
              <img src={mockupImages[2]} alt="Interface mockup" />
              <p className="showcase-caption">Interfaz de usuario responsive</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="project-section">
        <div className="container">
          <h2 className="section-title">Responsabilidades</h2>
          <motion.div 
            className="responsibilities-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {project.responsibilities.map((resp, index) => (
              <motion.div
                key={index}
                className="responsibility-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="responsibility-number">{String(index + 1).padStart(2, '0')}</span>
                <p>{resp}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="project-section challenges-section">
        <div className="container">
          <h2 className="section-title">Desafíos y Aprendizajes</h2>
          <motion.div 
            className="challenges-list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {project.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="challenge-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="challenge-icon">⚡</div>
                <p>{challenge}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="project-section results-section">
        <div className="container">
          <h2 className="section-title">Resultados e Impacto</h2>
          <motion.div 
            className="results-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                className="result-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="result-icon">✓</div>
                <p>{result}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="project-navigation">
        <div className="container">
          <button onClick={handleBackClick} className="btn-rounded">
            Ver más proyectos
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;
