import React from 'react';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero section">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hi, my name is</p>
                    <h1 className="hero-name">Mustakim Pathan.</h1>
                    <h2 className="hero-title">AI & Data Science Student.</h2>
                    <p className="hero-description">
                        I build <span className="highlight">machine learning models</span>, <span className="highlight">full-stack apps</span>,
                        and anything that pushes me beyond average.
                    </p>

                    <div className="hero-actions">
                        <a href="https://github.com/pmustakim13" target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="GitHub">
                            <FaGithub /> GitHub
                        </a>
                        <a href="http://www.linkedin.com/in/themustakimpathan" target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="LinkedIn">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="https://drive.google.com/file/d/1U57fUWdN8Itscwkg2q9Vn8lI4CK77pu2/view?usp=drive_link" target="_blank" className="btn btn-primary" aria-label="Download Resume">
                            <FaFileDownload /> Download Resume
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="glow-circle"></div>
                    {/* We could add a 3D spline or image here later. For now, a stylish abstraction. */}
                    <div className="code-block-decoration">
                        <pre>
                            <code>
                                {`class Developer:
  name = "Mustakim"
  role = "AI Engineer"
  
  def code():
    while True:
      learn()
      build()`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
