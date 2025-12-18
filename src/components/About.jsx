import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a highly motivated and detail-oriented <span className="highlight">AI & Data Science student</span> with hands-on experience in
                            Python, C, ML pipelines, data analysis, and full-stack development.
                        </p>
                        <p>
                            Skilled in solving real-world problems with <span className="highlight">analytical thinking</span> and <span className="highlight">clean engineering</span>.
                            My passion lies in bridging the gap between raw data and actionable intelligence while building intuitive user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
