import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-card">
                    <p className="contact-text">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>

                    <div className="contact-details">
                        <a href="mailto:pmustakim13@gmail.com" className="contact-item">
                            <FaEnvelope className="icon" />
                            <span>pmustakim13@gmail.com</span>
                        </a>
                        <a href="tel:+917776807786" className="contact-item">
                            <FaPhoneAlt className="icon" />
                            <span>+91 7776807786</span>
                        </a>
                    </div>

                    <div className="social-links-big">
                        <a href="https://github.com/pmustakim13" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
                        <a href="http://www.linkedin.com/in/themustakimpathan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
