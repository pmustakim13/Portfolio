import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [theme, setTheme] = useState('dark');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo">
                    &lt;MP /&gt;
                </div>

                <nav className="nav-links">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="header-actions">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
