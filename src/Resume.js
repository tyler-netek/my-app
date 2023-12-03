import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <div id='resume' className="resume-header">
        <h1>Tyler J. Netek</h1>
        <p>
          <a href="mailto:tyler.netek@outlook.com">tyler.netek@outlook.com</a> | (832) 299-8200 |{' '}
          <a href="https://www.linkedin.com/in/tylernetek/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/tylernetek/
          </a>
        </p>
      </div>

      <div className="resume-section">
        <h2 className="section-title">EDUCATION & CERTIFICATIONS</h2>
        <p className="section-content">
          M.S., Analytics (Data Science) – Georgia Institute of Technology, August 2023-Present
        </p>
        <p className="section-content">
          B.B.A., Management Information Systems – University of Houston, August 2019-May 2022
        </p>
        <p className="section-content">
          Cumulative GPA: 3.98 / 4.00, Major GPA: 4.00 / 4.00 (Summa Cum Laude / Honors Program)
        </p>
      </div>

      <div className="resume-section">
        <h2 className="section-title">SKILLS</h2>
        <p className="section-content">
          <strong>Languages:</strong> JavaScript/TypeScript, Python, Rust, R, SQL, Bash, HTML/CSS
        </p>
        <p className="section-content">
          <strong>Frameworks/Libraries:</strong> React/Redux, Node, Next, Express, D3, Pandas, NumPy,
          Django, Flask, Yew.rs, Matplotlib, Tidyverse, ggplot2
        </p>
        <p className="section-content">
          <strong>Tools:</strong> GitHub/Git, AWS, PostgreSQL, MongoDB, Docker, Jenkins, GraphQL,
          Visual Studio Code
        </p>
      </div>

      <div className="resume-section">
        <h2 className="section-title">EXPERIENCE</h2>
        <h3>Associate Software Engineer – Capital One, Richmond, VA | August 2023 - Present</h3>
        <p>Loading...</p>

        <h3>Cloud Analyst, Security & Controls – Oracle, Austin, TX | July 2022 – August 2023</h3>
        <p>
          Developed a Python application using Oracle Fusion Cloud REST APIs, Requests, Pandas, and NumPy to automate various consulting tasks. The application efficiently extracted JSON data using get requests and converted it to a dataframe in Excel. Utilizing NumPy, the code iterated through the data to generate payloads for post requests. This optimized automation significantly reduced processing time by approximately 75% or more depending on payload size, streamlining tasks like user creation, role provisioning, and security context type/value provisioning.
        </p>
        <p>
          Automated folder un-nesting and updating file/folder naming conventions using Python scripting, regular expressions, and packages such as itertools, shutil, OS, and pathlib–then processed over 50 million files and 600 GB of data through a VM using Linux on the client's end.
        </p>
        <p>
          Maintained 85%+ billable percentage as a consultant, provided expertise and guidance to clients in implementing, configuring, and optimizing Oracle Fusion Cloud applications to improve their business processes and achieve organizational goals.
        </p>
        <p>
          Automated various tedious web-based tasks in the Oracle Fusion Cloud web application using the Playwright and Axios Libraries, Oracle Fusion Cloud REST APIs, and JavaScript scripting to save time on billable engagements.
        </p>
      </div>

      <div className="resume-section">
        <h2 className="section-title">PROJECTS</h2>
        <p className="section-content">This Website (Built using React)</p>
        <p className="section-content">Data Science Projects:
          1.) (IN PROGRESS) Working on a Dynamic Full Stack Application which is a Functional Pokedex, by integrating PokeAPI with Data Science Libraries and Full Stack JavaScript Libraries/Frameworks.
          <hr>
          2.) Using Python, Matplotlib, and Seaborn I created a data analysis project to aid in selecting a competitive pokemon team based on type/generation through the creation of comparative boxplots and barcharts using a pokemon dataset from Kaggle.
        </p>
            
            
        <p className="section-content">Full Stack Web Development Projects - Created a fully functional Pokemon Battle Simulator where you can select either Gengar or Nidorino, then battle the pokemon you did not select. There are
            actual stats from the games, status effects, it is full turn based with psuedo-computer player AI logic.</p>
      </div>
    </div>
  );
}

export default Resume;

