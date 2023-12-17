import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import About from './About';
import reportWebVitals from './reportWebVitals';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Navbar />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


