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
          M.S., Analytics (Data Science) – Georgia Institute of Technology, August 2023 - (May 2025 or December 2025)
        </p>
        <p className="section-content">
          Cumulative GPA: 4.00 / 4.00, Major GPA: 4.00 / 4.00
        </p>
        <p className="section-content">
          B.B.A., Management Information Systems – University of Houston, August 2019 - May 2022
        </p>
        <p className="section-content">
          Cumulative GPA: 3.98 / 4.00, Major GPA: 4.00 / 4.00 (Summa Cum Laude / Honors Program)
        </p>
        <p className="section-content">
          Notable Courses:
          <p> Georgia Tech: </p>
          <ul>
            <li>Computing for Data Analytics (Python, Matplotlib, BeautifulSoup, Bokeh, Seaborn, Pandas, SQL, NumPy, SciPy)</li>
            <li>Analysis of Unstructured Data (NLP, Machine Learning, Web Scraping)</li>
            <li>Intro. to Analytics Modeling (R, classification, clustering, change detection, time series modeling, regression models, design of experiments, probability distributions, probability-based models and simulation, PCA, and optimization)</li>
          </ul>
          <p> University of Houston: </p>
          <ul>
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
          - Implemented PySpark for large-scale data transformation and manipulation, leveraging distributed computing capabilities for efficient processing. Single-handedly tackled a
formidable challenge by resolving a long-standing application-breaking bug through exhaustive optimization and development of PySpark migrations. This initiative ensured
seamless data processing and prevented workflow interruptions, demonstrating my unique problem-solving abilities and expertise in utilizing Python.
        </p>
        <p>
          - Continuously learning and implementing cutting-edge data science techniques and algorithms to enhance the capabilities of machine learning models and data processing
pipelines. Solved problems across the entire data pipeline, from data engineering to data science/analytics, and backend architecture.
        </p>
        <p>
          - Deployed and managed containerized applications on AWS using services such as Fargate, EC2, and ECS, optimizing for scalability and reliability, and leveraged AWS
Lambda for serverless computing, automating tasks and enhancing system efficiency. Earned AWS Solutions Architect - Associate Certification.
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
        <p>
          - Currently crafting a comprehensive Pokedex application that seamlessly integrates the PokeAPI with cutting-edge Data Science Libraries and Full Stack JavaScript frameworks. Employing Data Science tools to enrich the user experience, the project delves into the intricate details of Pokemon characteristics, offering insights into types, abilities, and statistics. The endeavor focuses on creating an engaging and user-friendly application through the implementation of interactive features and visualizations.
        </p>
        <p>
          - Using Python, Matplotlib, and Seaborn I created a data analysis project to aid in selecting a competitive pokemon team based on type/generation through the creation of comparative boxplots and barcharts using a pokemon dataset from Kaggle.
        </p>
        <p>
          - Utilized Python, Matplotlib, and Seaborn to construct a sophisticated data analysis project designed to assist trainers in selecting competitive Pokemon teams. Leveraging a Pokemon
dataset sourced from Kaggle, the analysis incorporates comparative boxplots and barcharts to visualize type and generation-based insights. This data-driven approach facilitates
decision-making for trainers by providing a nuanced perspective on team composition, taking into account strengths and weaknesses.
        </p>
        <p>
          - Zillow Housing Prices Predictive Modeling Full Stack Application (Predictr):
- This project leverages scikit-learn and Python data science tools to predict housing market trends in Richmond, VA over 1, 5, and 10 years, with a unique focus on real-time data acquisition through web scraping of Zillow search results cards. Employing advanced machine learning models, including Linear Regression, Decision Trees, Random Forests, and Gradient Boosting, the project encompasses thorough feature engineering and model optimization. The Full Stack Application integrates these models, providing an interactive platform for users to explore and analyze forecasted housing market scenarios. Efforts are concentrated on efficient data manipulation and insightful visualization using matplotlib, ensuring users receive personalized insights and an in-depth understanding of the Richmond, VA housing market dynamics.
        </p>
        <p>- Engineered a fully functional Pokemon Battle Simulator offering users the choice between Gengar and Nidorino, allowing them to battle the Pokemon they didn't select. The simulator incorporates real in-game statistics, status effects, and a comprehensive turn-based system, complete with computer player AI logic for a realistic and challenging experience. Additional features include turn skips, adaptive opponent algorithms for difficulty enhancement, Pokemon typing considerations, and critical hit mechanics.</p>
      </div>
    </div>
  );
}

export default Resume;


