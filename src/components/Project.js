import React from 'react';
import './Project.css';

const Project = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description: "Developed a comprehensive Hospital Management System. Collaborated with team members to divide tasks, meet deadlines, and deliver a high-quality product.",
      technologies: ["C Programming"],
      link: "#"
    },
    {
      title: "Resume Creator",
      description: "Developed a Python tool to automate resume creation, dynamically generating tailored resumes by extracting key professional details from user inputs. Implemented customizable templates for formatting and styling, ensuring personalized and professional output. Integrated file export options to support multiple formats including PDF and DOCX.",
      technologies: ["Python"],
      link: "#"
    },
    {
      title: "Event Budget and Expense Tracking System",
      description: "Developed a Java and DBMS-based application for tracking event budgets and expenses, supporting functionalities like adding events, budgets, expenses, revenues, and generating detailed financial reports. The system employs efficient data handling with DAO pattern and file-based report export.",
      technologies: ["Java", "DBMS"],
      link: "#"
    }
  ];

  return (
    <section id="project" className="project-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
