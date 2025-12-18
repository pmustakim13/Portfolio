import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const ProjectCard = ({ title, description, tags, link }) => (
    <div className="project-card">
        <div className="project-content">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-tags">
                {tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                ))}
            </div>
            <div className="project-links">
                <a href={link || "#"} className="project-link" aria-label="View Code">
                    <FaGithub /> Code
                </a>
                {/* <a href="#" className="project-link"><FaExternalLinkAlt /> Live Demo</a> */}
            </div>
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "Digit Recognizer",
            description: "High-accuracy handwritten digit classifier using a CNN trained on the MNIST dataset. Handles end-to-end preprocessing and training pipeline.",
            tags: ["Python", "TensorFlow", "CNN", "Deep Learning"],
            link: "https://github.com/pmustakim13/Digit-Recognizer.git"
        },
        {
            title: "Student Performance Prediction",
            description: "Machine Learning model achieving 96% accuracy. Improved data quality by 33% through rigorous preprocessing and feature engineering.",
            tags: ["Python", "Scikit-Learn", "Data Analysis", "Pandas"],
            link: "https://github.com/pmustakim13/Student-Performance-Prediction.git"
        },
        {
            title: "Angular CRUD App",
            description: "Full-stack application built in 6 days featuring secure login, stateful CRUD API, and a fully responsive UI.",
            tags: ["Angular", "TypeScript", "Node.js", "API"],
            link: "https://github.com/pmustakim13/Login-Form-using-Angular/tree/main"
        },
        {
            title: "AI Resume Matchmaking",
            description: "Developed a machine learning model to match resumes with job descriptions for better candidate-job fit.Implemented NLP techniques to extract and analyze resume content.",
            tags: ["Scikit-Learn", "NumPy", "BERT"],
            link: "https://github.com/pmustakim13/AI-Resume-Matchmaking"
        },
        {
            title: "Weather Chatbot",
            description: "Developed an AI-powered weather application that interprets natural language queries to provide real-time weather insights. Integrated LangChain and OpenRouter with a FastAPI backend to intelligently fetch and format data from Open-Meteo.",
            tags: ["React", "FastAPI", "LangChain", "OpenRouter", "Open-Meteo"],
            link: "https://github.com/pmustakim13/Weather-AI.git"
        },

    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
