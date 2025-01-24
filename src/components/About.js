import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        
        <div className="bio-section">
          <h3>KAMALESH G J</h3>
          <div className="bio-content">
            <p>
              As a B.Tech AI-DS student at Sri Eshwar College of Engineering, I am deeply passionate about software development and problem-solving. My journey in technology has equipped me with a versatile skill set in programming languages and development tools.
            </p>
            <p>
              My technical expertise includes:
            </p>
            <ul>
              <li>Strong foundation in C/C++ programming and Data Structures</li>
              <li>Web development skills with HTML, CSS</li>
              <li>Database management using SQL</li>
              <li>Application development with Java and Python</li>
            </ul>
            <p>
              I've applied these skills in developing practical solutions like a Hospital Management System, an automated Resume Creator, and an Event Budget Tracking System. Each project has strengthened my ability to write efficient code and create user-friendly applications.
            </p>
            <p>
              Currently focusing on expanding my knowledge in AI and Data Science while actively seeking opportunities to contribute to innovative projects.
            </p>
          </div>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
