import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Certification from './components/Certification';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import HireMe from './components/HireMe';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <HireMe />
      <About />
      <Education />
      <Certification />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
