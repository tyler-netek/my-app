import chart from './images/chart.png';
import main from './images/main.png';
import search from './images/searchbar.png'; 
import React from 'react';
import './Photos.css';

const Photos = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={main} />
      </div>
      <div className="image-container">
        <img src={search} />
      </div>
      <div className="image-container">
        <img src={chart} />
      </div>
    </div>
  );
}

export default Photos;