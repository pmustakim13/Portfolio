import React from 'react';
import './Education.css';

const EducationItem = ({ degree, institution, score, date }) => (
    <div className="edu-item">
        <div className="edu-header">
            <h3 className="edu-degree">{degree}</h3>
            <span className="edu-date">{date}</span>
        </div>
        <p className="edu-institution">{institution}</p>
        <span className="edu-score">{score}</span>
    </div>
);

const CertificationBadge = ({ name, issuer }) => (
    <div className="cert-badge">
        <span className="cert-name">{name}</span>
        <span className="cert-issuer">{issuer}</span>
    </div>
);

const Education = () => {
    return (
        <section className="section education">
            <div className="container">

                <div className="education-layout">
                    <div className="edu-column">
                        <h2 className="section-title">Education</h2>
                        <div className="edu-list">
                            <EducationItem
                                degree="B.Tech — AI & Data Science"
                                institution="Vishwakarma University, Pune"
                                score="GPA: 7.5"
                                date="Present"
                            />
                            <EducationItem
                                degree="Diploma — Computer Science"
                                institution="SVCP Pune"
                                score="76.91%"
                                date="Completed"
                            />
                        </div>
                    </div>

                    <div className="cert-column">
                        <h2 className="section-title">Certifications</h2>
                        <div className="cert-grid">
                            <CertificationBadge name="Big Data" issuer="Coursera" />
                            <CertificationBadge name="Machine Learning Algorithms" issuer="LinkedIn Learning" />
                            <CertificationBadge name="Full Stack Development" issuer="Udemy" />
                            <CertificationBadge name="Data Analysis with Python" issuer="Coursera" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
