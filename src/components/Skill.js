import React from 'react';
import './Skill.css';

const Skill = () => {
  const skills = {
    "Languages": ["C", "C++", "Python", "HTML", "CSS", "SQL", "Java"],
    "Tools/Platform": ["GitHub", "GIT", "Visual Studio Code"]
  };

  return (
    <section id="skill" className="skill-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skill-list">
              {skillList.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
