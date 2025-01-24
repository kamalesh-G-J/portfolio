import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      institution: "Sri Eshwar College of Engineering",
      degree: "B.Tech AI-DS",
      period: "2023 - 2027",
      score: ""
    },
    {
      institution: "Sri Vidya Mandir School",
      degree: "HSC",
      period: "2022 - 2023",
      score: "86.6%"
    },
    {
      institution: "Sri Vidya Mandir School",
      degree: "SSLC",
      period: "2020 - 2021",
      score: "Pass"
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.institution}</h3>
            <div className="education-details">
              <p className="degree">{edu.degree}</p>
              <p className="period">{edu.period}</p>
              {edu.score && <p className="score">Score: {edu.score}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
