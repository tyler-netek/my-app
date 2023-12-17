import React from 'react';
import './Resume.css';

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
        <p>
          - Collaborated with cross-functional teams to design and implement scalable software solutions, incorporating technologies such as React, Java, Spring, Express, MongoDB, Mongoose, and FastAPI, contributing to the enhancement of Capital One's tech stack.
        </p>
        <p>
          - Utilized Agile methodologies and actively participated in sprint planning, ensuring the timely delivery of high-quality software products that met both technical and business requirements.
        </p>
        <p>
          - Conducted comprehensive code reviews, identifying areas for improvement and implementing best practices to enhance codebase efficiency and maintainability. Applied expertise in React for front-end development and Express for back-end development.
        </p>
        <p>
          - Implemented Python-based solutions leveraging FastAPI for efficient API development, contributing to the optimization of Capital One's internal processes.
        </p>
        <p>
          - Engaged in continuous learning and professional development to stay abreast of emerging technologies and industry trends, including proficiency in NumPy and Pandas for data manipulation and analysis within software solutions.
        </p>
        <p>
          - AWS Solutions Architect Certified, bringing architectural expertise to the team, optimizing system performance, and ensuring alignment with AWS best practices.
        </p>

        <h3>Cloud Analyst, Security & Controls – Oracle, Austin, TX | July 2022 – August 2023</h3>
        <p>
          - Developed a Python application using Oracle Fusion Cloud REST APIs, Requests, Pandas, and NumPy to automate various consulting tasks. The application efficiently extracted JSON data using get requests and converted it to a dataframe in Excel. Utilizing NumPy, the code iterated through the data to generate payloads for post requests. This optimized automation significantly reduced processing time by approximately 75% or more depending on payload size, streamlining tasks like user creation, role provisioning, and security context type/value provisioning.
        </p>
        <p>
          - Automated folder un-nesting and updating file/folder naming conventions using Python scripting, regular expressions, and packages such as itertools, shutil, OS, and pathlib–then processed over 50 million files and 600 GB of data through a VM using Linux on the client's end.
        </p>
        <p>
          - Maintained 85%+ billable percentage as a consultant, provided expertise and guidance to clients in implementing, configuring, and optimizing Oracle Fusion Cloud applications to improve their business processes and achieve organizational goals.
        </p>
        <p>
          - Automated various tedious web-based tasks in the Oracle Fusion Cloud web application using the Playwright and Axios Libraries, Oracle Fusion Cloud REST APIs, and JavaScript scripting to save time on billable engagements.
        </p>
        <p>
          - Implemented web scraping techniques using BeautifulSoup to extract, structure, and prepare data from Oracle Fusion Cloud web applications, enabling data-driven decision-making and dynamic presentations.
        </p>
        <p>
          - Leveraged advanced SQL queries and database management techniques as a Consultant for Oracle Cloud, extracting valuable insights from vast datasets to inform strategic decision-making processes and optimize clients' cloud-based operations.
        </p>
      </div>

      <div className="resume-section">
        <h2 className="section-title">PROJECTS</h2>
        <p className="section-content">This Website (Built using React)</p>
        <p className="section-content">Data Science Projects:</p>
        <p>
          1.) (IN PROGRESS) Working on a Dynamic Full Stack Application which is a Functional Pokedex, by integrating PokeAPI with Data Science Libraries and Full Stack JavaScript Libraries/Frameworks.
        </p>
        <p>
          2.) Using Python, Matplotlib, and Seaborn I created a data analysis project to aid in selecting a competitive pokemon team based on type/generation through the creation of comparative boxplots and barcharts using a pokemon dataset from Kaggle.
        </p>

        <p className="section-content">Full Stack Web Development Projects: Created a fully functional Pokemon Battle Simulator where you can select either Gengar or Nidorino, then battle the pokemon you did not select. There are actual stats from the games, status effects, it is full turn based with psuedo-computer player AI logic.</p>
      </div>
    </div>
  );
}

export default Resume;

