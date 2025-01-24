import React from 'react';
import './Home.css';
import hero from './k-logo.jpg';

const Home = () => {
  return (
    <section id='home' className='home-section'>
      <div className='container'>
        <div className='text-section'>
          <h1>Hi, There<br />
            <span>I'm Kamalesh</span>
          </h1>
          <h3>I'm a Java Developer</h3>
          <p></p>
          <a href="#hire-me" className='btn'>Hire Me</a>
        </div>
        <div className='image-section'>
          <img src={hero} alt="k-logo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
