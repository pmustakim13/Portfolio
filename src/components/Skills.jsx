import React from 'react';
import {
    FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaCode
} from 'react-icons/fa';
import { SiTypescript, SiAngular, SiBootstrap, SiSequelize, SiMysql, SiScikitlearn, SiTensorflow, SiNumpy, SiPandas, SiPytorch, SiPostman } from 'react-icons/si';
import './Skills.css';

const SkillCategory = ({ title, skills }) => (
    <div className="skill-category">
        <h3>{title}</h3>
        <div className="skill-grid">
            {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const skillData = [
        {
            title: "Programming & Web",
            skills: [
                { name: "Python", icon: <FaPython color="#3776AB" /> },
                { name: "C", icon: <span style={{ fontWeight: 'bold' }}>C</span> },
                { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
                { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
                { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
                { name: "TypeScript", icon: <SiTypescript color="#007ACC" /> },
                { name: "Angular", icon: <SiAngular color="#DD0031" /> },
                { name: "React", icon: <FaReact color="#61DAFB" /> },
                { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
                { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
            ]
        },
        {
            title: "Databases & Tools",
            skills: [
                { name: "SQL", icon: <FaDatabase /> },
                { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
                { name: "Git", icon: <FaGitAlt color="#F05032" /> },
                { name: "Docker", icon: <FaDocker color="#2496ED" /> },
                { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
                { name: "VS Code", icon: <FaCode color="#007ACC" /> },
            ]
        },
        {
            title: "ML & AI",
            skills: [
                { name: "Scikit-learn", icon: <SiScikitlearn color="#F7931E" /> },
                { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
                { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" /> },
                { name: "NumPy", icon: <SiNumpy color="#013243" /> },
                { name: "Pandas", icon: <SiPandas /> },
            ]
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-container">
                    {skillData.map((category, idx) => (
                        <SkillCategory key={idx} title={category.title} skills={category.skills} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
