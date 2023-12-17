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
          </a> | <a href="https://www.tylernetek.xyz" target="_blank" rel="noopener noreferrer">https://www.tylernetek.xyz</a>
        </p>
      </div>

      <div className="resume-section">
        <h2 className="section-title">EDUCATION & CERTIFICATIONS</h2>
        <p className="section-content">
          M.S., Analytics (Data Science) – Georgia Institute of Technology, August 2023 - (August 2025 or December 2025)
        </p>
        <p className="section-content">
          B.B.A., Management Information Systems – University of Houston, August 2019 - May 2022
        </p>
        <p className="section-content">
          Cumulative GPA: 4.00 / 4.00, Major GPA: 4.00 / 4.00 (Summa Cum Laude / Honors Program)
        </p>
        <p className="section-content">
          Notable Courses:
          <ul>
            <li>Computing for Data Analytics (Python, Matplotlib, BeautifulSoup, Bokeh, Seaborn, Pandas, SQL, NumPy, SciPy)</li>
            <li>Analysis of Unstructured Data (NLP, Machine Learning, Web Scraping)</li>
            <li>Intro. to Analytics Modeling (R, classification, clustering, change detection, time series modeling, regression models, design of experiments, probability distributions, probability-based models and simulation, PCA, and optimization)</li>
            <li>Information Systems Development Tools (Java)</li>
            <li>Network Security and Infrastructure (Networking)</li>
            <li>Programming for Business Analytics (R, ggplot2, tidyverse, shiny, readr, tibble, caret)</li>
            <li>Transaction Processing Systems (JavaScript, HTML, CSS)</li>
            <li>Business Applications of Database Management (SQL)</li>
            <li>Systems Analysis and Design</li>
            <li>Information Technology Project Management</li>
          </ul>
        </p>
      </div>

      <div className="resume-section">
        <h2 className="section-title">SKILLS</h2>
        <p className="section-content">
          <strong>Languages:</strong> Python, JavaScript/TypeScript, Rust, Java, R, SQL, Bash, HTML/CSS, C++
        </p>
        <p className="section-content">
          <strong>Frameworks/Libraries:</strong> React/Redux, Node/Deno, Next, Express, D3, Pandas, NumPy, Django, Flask, Yew.rs, Matplotlib, BeautifulSoup, SciPy, Seaborn, Bokeh, Tidyverse, R Shiny, Sci-Kit Learn, PyTorch, FastAPI, Keras, NLTK, TensorFlow
        </p>
        <p className="section-content">
          <strong>Tools:</strong> GitHub/Git, AWS, PostgreSQL, MongoDB, Docker, Jenkins, GraphQL, Visual Studio Code, Vim, Jupyter, Kubernetes, SQLAlchemy
        </p>
      </div>

      <div className="resume-section">
        <h2 className="section-title">EXPERIENCE</h2>
        <h3>Associate Software Engineer – Capital One, Richmond, VA | August 2023 - Present</h3>
        {/* Add experience details here */}
        <h3>Cloud Analyst, Security & Controls – Oracle, Austin, TX | July 2022 – August 2023</h3>
        {/* Add experience details here */}
      </div>

      <div className="resume-section">
        <h2 className="section-title">PROJECTS</h2>
        <p className="section-content">This Website (Built using React)</p>
        <p className="section-content">Data Science Projects:</p>
        {/* Add project details here */}
      </div>
    </div>
  );
}

export default Resume;
