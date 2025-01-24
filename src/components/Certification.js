import React from 'react';
import './Certification.css';

const Certification = () => {
  const certifications = [
    {
      name: "Mastering Data Structures and Algorithm using C",
      provider: "UDEMY",
      year: "2024"
    },
    {
      name: "Python for Beginners",
      provider: "Sololearn",
      year: "2024"
    },
    {
      name: "Basics of python",
      provider: "Infosys Springboard",
      year: "2023"
    }
  ];

  return (
    <section id="certification" className="certification-section">
      <h2>Certifications</h2>
      <div className="certification-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="certification-content">
              <h3>{cert.name}</h3>
              <div className="certification-details">
                <p className="provider">{cert.provider}</p>
                <p className="year">{cert.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
