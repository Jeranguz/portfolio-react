import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import ProjectDetail from './components/Projects/ProjectDetail';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/variables.css';
import './styles/global.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="App">
        {/* Skip to main content - Accesibilidad */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        
        <main id="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Skills />
                <Contact />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
