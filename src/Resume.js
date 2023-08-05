import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <div id='resume' className="resume-header">
        <h1>Tyler J. Netek</h1>
        <p>
          <a href="mailto:tyler.netek@outlook.com">tyler.netek@outlook.com</a> | <a>(832) 299-8200</a> |{' '}
          <a href="https://www.linkedin.com/in/tylernetek/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/tylernetek/
          </a>
        </p>
      </div>

      <div className="resume-section">
        <h2>EDUCATION & CERTIFICATIONS</h2>
        <ul>
          <li>
            M.S., Analytics (Data Science) – Georgia Institute of Technology, August 2023-Present
          </li>
          <li>
            B.B.A., Management Information Systems – University of Houston, August 2019-May 2022
            <ul>
              <li>
                Cumulative GPA: 3.98 / 4.00, Major GPA: 4.00 / 4.00 (Summa Cum Laude / Honors Program)
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="resume-section">
        <h2>SKILLS</h2>
        <p>
          <strong>Languages:</strong> JavaScript/TypeScript, Python, Rust, R, SQL, Bash, HTML/CSS
        </p>
        <p>
          <strong>Frameworks/Libraries:</strong> React/Redux, Node, Next, Express, D3, Pandas, NumPy,
          Django, Flask, Yew.rs, Matplotlib, SciPy, Sci-Kit Learn, PySpark, Tidyverse, ggplot2
        </p>
        <p>
          <strong>Tools:</strong> GitHub/Git, AWS, PostgreSQL, MongoDB, Docker, Jenkins, GraphQL,
          Visual Studio Code
        </p>
      </div>

      <div className="resume-section">
        <h2>EXPERIENCE</h2>
        <h3>Associate Software Engineer – Capital One, Richmond, VA | August 2023 - Present</h3>
        <ul>
          <li>Loading...</li>
        </ul>

        <h3>Cloud Analyst, Security & Controls – Oracle, Austin, TX | July 2022 – August 2023</h3>
        <ul>
          <li>Developed a Python application using Oracle Fusion Cloud REST APIs, Requests, Pandas, and NumPy to automate various consulting tasks. The application efficiently extracted JSON data using get requests and converted it to a dataframe in Excel. Utilizing NumPy, the code iterated through the data to generate payloads for post requests. This optimized automation significantly reduced processing time by approximately 75% or more depending on payload size, streamlining tasks like user creation, role provisioning, and security context type/value provisioning.</li>
          <li>Automated folder un-nesting and updating file/folder naming conventions using Python scripting, regular expressions, and packages such as itertools, shutil, OS, and pathlib–then processed over 50 million files and 600 GB of data through a VM using Linux on the client's end. </li>
          <li>Maintained 85%+ billable percentage as a consultant, provided expertise and guidance to clients in implementing, configuring, and optimizing Oracle Fusion Cloud applications to improve their business processes and achieve organizational goals.</li>
          <li>Automated various tedious web-based tasks in the Oracle Fusion Cloud web application using the Playwright and Axios Libraries, Oracle Fusion Cloud REST APIs, and JavaScript scripting to save time on billable engagements.</li>        
        </ul>
      </div>

      <div className="resume-section">
        <h2>PROJECTS</h2>
        <ul>
            <li>This Website (Built using React/Django)</li>
            <li>Data Science Projects (Loading...)</li>
            <li>Full Stack Web Development Projects (Loading...)</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
