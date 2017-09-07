import React from 'react';
import './RacerIcon.css';

const images = {
  'Joe PetersenDes Moines, IA': 'https://bargeek.files.wordpress.com/2009/03/pbr_can.jpg',
  'Chad DonahueDes Moines, IA': 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_GB/Red-Bull-Energy-Drink-Can-UK.png',
};

export const RacerIcon = ({name, location}) => (
  <span>
    {images[name+location] && <img src={images[name+location]} className="racer-icon" alt={name} />}
  </span>
);
