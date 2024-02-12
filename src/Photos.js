import chart from './images/chart.png';
import main from './images/main.png';
import search from './images/searchbar.png'; 
import React from 'react';
import './Photos.css';

const Photos = () => {
  return (
    <div className="container">
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