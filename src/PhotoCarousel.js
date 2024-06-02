import mountainImage from './images/1000001892.jpg';
import dogImage from './images/1000001773.jpg'; 
import leslieImage from './images/1000001913.jpg';
import React, { useState } from 'react';
import './PhotoCarousel.css';

const photos = [
  mountainImage,
  dogImage,
  leslieImage
];

const PhotoCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextPhoto = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrent((prevCurrent) => (prevCurrent - 1 + photos.length) % photos.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevPhoto}>❮</button>
      <div className="carousel-photo-container">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`carousel-photo ${index === current ? 'active' : 'inactive'}`}
            style={{ backgroundImage: `url(${photo})` }}
          ></div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextPhoto}>❯</button>
    </div>
  );
};

export default PhotoCarousel;
