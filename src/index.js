import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './navbar';
import About from './About';
import reportWebVitals from './reportWebVitals';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <About />
    <Resume />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

