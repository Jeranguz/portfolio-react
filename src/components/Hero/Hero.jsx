import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const getIcon = (iconName) => {
    const icons = {
      linkedin: FaLinkedin,
      github: FaGithub,
      email: FaEnvelope
    };
    const Icon = icons[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <section id="home" className="hero" role="banner">
      <div className="hero-noise" aria-hidden="true" />

      <div className="hero-inner">
        {/* Top meta strip */}
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="hero-label">{personalInfo.role}</span>
          <span className="hero-meta-dash" aria-hidden="true" />
          <span className="hero-location">{personalInfo.location}</span>
        </motion.div>

        {/* Large display name */}
        <div className="hero-name-block">
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-name-first">Jeremy</span>
            <span className="hero-name-last">Guzmán</span>
          </motion.h1>
        </div>

        {/* Bottom: tagline + CTAs */}
        <div className="hero-foot">
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <a href="#projects" className="btn-hero-primary">
              Ver proyectos <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn-hero-ghost">
              Hablemos
            </a>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          className="hero-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="hero-social-link"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.15 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ transitionDelay: `${0.9 + index * 0.08}s` }}
            >
              {getIcon(link.icon)}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        aria-hidden="true"
      >
        <span>scroll</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  );
};

export default Hero;
