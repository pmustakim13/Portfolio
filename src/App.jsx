import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Mustakim Pathan. Built with React & Vanilla CSS.</p>
      </footer>
    </div>
  );
}

export default App;
