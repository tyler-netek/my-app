import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import About from './About';
import reportWebVitals from './reportWebVitals';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import Photos from './Photos';
import Carousel from './PhotoCarousel';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Navbar />
      <About />
      <Resume />
      <Carousel />
      <Contact />
      <Photos />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
