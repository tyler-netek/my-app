import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <div id='resume' className="resume-header">
        <h1>Tyler J. Netek, Aspiring Data Scientist</h1>
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
          M.S., Analytics (Data Science) – Georgia Institute of Technology, August 2023 - May 2025
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
            <li>Data Mining and Statistical Learning (Neural Networks, Support Vector Machines)</li>
            <li>Data and Visual Analytics (Databricks, Spark, AWS)</li>
            <li>Regression Analysis (Advanced Regression, Computational Statistics)</li>
            <li>Simulation (Advanced Mathematical Programming, Simulation Modeling)</li>
            <li>Data Analytics for Business (R, Regression)</li>
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
          <strong>Languages:</strong> Python, Java, JavaScript/TypeScript, R, SQL, Rust, Bash, HTML/CSS
        </p>
        <p className="section-content">
          <strong>Frameworks/Libraries:</strong>Pandas, NumPy, SciPy, Sci-Kit Learn, PyTorch, PySpark, Spring Boot, Kafka, Hadoop, React, NLTK
        </p>
        <p className="section-content">
          <strong>Tools:</strong> GitHub/Git, AWS (Lambda, EC2, ECS, SNS, SQS, Fargate, S3, EMR, QuickSight, DynamoDB), Docker, Jenkins, Kubernetes, Databricks
        </p>
      </div>

      <div className="resume-section">
        <h2 className="section-title">EXPERIENCE</h2>
        <h3>Associate Software Engineer – Capital One, Richmond, VA | June 2023 - Present</h3>
        <p>
          - Led the migration of a legacy microservice codebase to Python 3.12, assuming ownership, and overseeing its maintenance and code reviews. This application re-validates metadata when given dataset CSV links, triggered by a scheduler Lambda via SQS, then populates a QuickSight dashboard.
        </p>
        <p>
          - Crafted a comprehensive dependency management system, parsing Python versions and OS details from Docker image URLs, utilizing the PyPi.org/JSON API  to verify and update dependencies within Pipfiles and Dockerfiles to ensure maximum compatibility and efficiency, while also providing error notifications for syntactical issues through command line interactions.
        </p>
        <p>
          - Implemented PySpark for large-scale data transformations, identifying and resolving a critical bug that caused exponential row duplication, by meticulously disassembling data frames into manageable chunks and reassembling them, effectively preventing memory overallocation issues within the constraints of maximum Lambda allocations.
        </p>
        <p>
          - Engineered a specialized API testing tool akin to Postman using Python, with libraries including Requests, os, and configparser. Integrated with our authentication system, the tool auto-navigates directories and executes commands to renew OAuth2 tokens older than 30 minutes, parsing updates from a secure configuration file to enhance security and testing efficiency.
        </p>
        <p>
          - Leveraged Databricks SQL and Python to transform JSON data into PySpark data frames, automating data deployment to S3 via SQS and Lambda within EMR, enhancing data querying for internal dashboards and showcasing expertise in data pipeline development from engineering to analytics.
        </p>
        <p>
          - Spearheaded a Spike Request for Comments (RFC) process to develop a new feature from 0 to 1 implementation, collaborating with product teams to refine requirements.
        </p>
        <p>
          - Defined technical specifications and crafted Jira tickets for each component. Designed and implemented a Python solution using asynchronous programming to optimize data processing, while removing unnecessary complexity in the codebase. Centralized the core function of the code to a generator for improved manageability and developer-friendliness. This included making two API calls, organizing dataset IDs using defaultdict(list), and implementing an async __aiter__ class generator to prevent duplication and yield data row by row rather than collecting all then calling all.
        </p>
        <p>
          - Enhanced CI/CD pipelines using Jenkins, Git, and Docker; debugged builds and utilized AWS CloudWatch for monitoring, optimizing software deployment and operational efficiency.
        </p>
        <h3>Cloud Analyst, Security & Controls – Oracle, Austin, TX | May 2022 – June 2023</h3>
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
          - [Zillow Housing Prices Predictive Modeling Full Stack Application (Predictr)]: This project leverages scikit-learn and Python data science tools to predict housing market trends in Richmond, VA over 1, 5, and 10 years, with a unique focus on real-time data acquisition through web scraping of Zillow search results cards. Employing advanced machine learning models, including Linear Regression, Decision Trees, Random Forests, and Gradient Boosting, the project encompasses thorough feature engineering and model optimization. The Full Stack Application integrates these models, providing an interactive platform for users to explore and analyze forecasted housing market scenarios. Efforts are concentrated on efficient data manipulation and insightful visualization using matplotlib, ensuring users receive personalized insights and an in-depth understanding of the Richmond, VA housing market dynamics.
        </p>
        <p>
          - [Pokemon Battle Simulator]: Engineered a fully functional Pokemon Battle Simulator offering users a roster of pokemon to choose from to build their team.. The simulator incorporates real in-game statistics, status effects, and a comprehensive turn-based system, complete with computer player AI logic for a realistic and challenging experience. Additional features include turn skips, adaptive opponent algorithms for difficulty enhancement, Pokemon typing considerations, and critical hit mechanics. 
        </p>
        <p>
          - [Competitive Pokemon Team Data Analysis]: Utilized Python, Matplotlib, and Seaborn to construct a sophisticated data analysis project designed to assist trainers in selecting competitive Pokemon teams. Leveraging a Pokemon
dataset sourced from Kaggle, the analysis incorporates comparative boxplots and barcharts to visualize type and generation-based insights. This data-driven approach facilitates
decision-making for trainers by providing a nuanced perspective on team composition, taking into account strengths and weaknesses.
        </p>
        <p>
         [Miscellaneous]: Developed a full-stack (React/Django) website for a Houston, TX coffee company, featuring product customization options, social features (e.g., reviews via Yelp API), integrated Google Analytics for website tracking, and built a secure, internal React dashboard for visualizing key metrics, accessible via user authentication (JWT) and PSQL user/pass storage (is_admin).
        </p>
        <p>
         [Applied Analytics Practicum (Georgia Tech)]: Collaborated with a partner organization on an applied analytics project, leveraging data-driven techniques to address a key business challenge. 
        </p>
      </div>
    </div>
  );
}

export default Resume;


