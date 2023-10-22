import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
      <App />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


