import chart from './images/chart.png';
import main from './images/main.png';
import search from './images/searchbar.png'; 
import React from 'react';
import './Photos.css';

const Photos = () => {
  return (
    
    <div className="container">
      <h1 className="title">Zillow Real Estate Market Predictive Modeling Full Stack Application:</h1>
      <br />
      <div className="image-container">
        <img src={main} alt="home page" />
      </div>
      <div className="image-container">
        <img src={search} alt="search bar" />
      </div>
      <div className="image-container">
        <img src={chart} alt="matplotlib chart" />
      </div>
    </div>
  );
}

export default Photos;