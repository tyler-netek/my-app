import React, { useEffect, useState } from 'react';
import './About.css';
import retroImage from './images/prof-pic.jpg'; 

function About() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const text =
      "I am an Associate Software Engineer at Capital One, and I'm also " +
      "currently a Master of Science - Analytics Student at Georgia Tech. " +
      "I'm fascinated with technology, and could not be more excited to see " +
      "the progression of technology over the course of my lifetime. I am currently a Full Stack Developer, but I'm also very interested in Machine Learning/Artificial Intelligence and Data Science. I'm originally from Houston" +
      ", Texas, but I currently reside in Richmond, Virginia.";
    let i = 0;

    const typeText = () => {
      if (i < text.length) {
        setTypedText((prevText) => prevText + text.charAt(i));
        i++;
        setTimeout(typeText, 38);
      }
    };

    typeText();
  }, []);

  return (
    <div className="about-container">
      <header id='about' className="about-header">
        <h2 className="matrix-title">About Me:</h2>
        <p className="matrix-text">
          {typedText}
          <span className="matrix-cursor">_</span>
        </p>
      </header>
      <div className="about-image-container">
        <img src={retroImage} alt="Retro" className="about-image" />
      </div>
    </div>
  );
}

export default About;


