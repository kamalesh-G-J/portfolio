import React from 'react';
import './HireMe.css';

const HireMe = () => {
  return (
    <section id="hire-me" className="hire-me-section">
      <div className="hire-me-container">
        <h2>Let's Work Together</h2>
        
        <div className="contact-info">
          <div className="info-group">
            <h3>Contact Details</h3>
            <p><i className="fas fa-envelope"></i> Email: kamaleshgj@gmail.com</p>
            <p><i className="fas fa-phone"></i> Phone: +91 9876543210</p>
            <p><i className="fas fa-map-marker-alt"></i> Location: Tamil Nadu, India</p>
          </div>

          <div className="info-group">
            <h3>Education</h3>
            <p>B.Tech Artificial Intelligence and Data Science</p>
            <p>Sri Eshwar College of Engineering</p>
            <p>CGPA: 8.5</p>
          </div>

          <div className="info-group">
            <h3>Key Qualifications</h3>
            <ul>
              <li>Strong foundation in programming languages (C, C++, Python, Java)</li>
              <li>Web development skills (HTML, CSS, JavaScript)</li>
              <li>Database management (SQL)</li>
              <li>Data Structures and Algorithms</li>
              <li>Problem-solving and analytical skills</li>
            </ul>
          </div>

          <div className="info-group">
            <h3>Professional Links</h3>
            <div className="social-links">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
