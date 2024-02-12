import chart from './images/chart.png';
import main from './images/main.png';
import search from './images/searchbar.png'; 
import React from 'react';
import './Photos.css';

const Photos = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={main} alt="Image 1" />
      </div>
      <div className="image-container">
        <img src={search} alt="Image 2" />
      </div>
      <div className="image-container">
        <img src={chart} alt="Image 3" />
      </div>
    </div>
  );
}

export default Photos;