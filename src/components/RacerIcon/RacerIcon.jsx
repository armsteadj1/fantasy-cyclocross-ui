import React from 'react';
import './RacerIcon.css';

const images = {
  'Joe PetersenRasmussen Bike Shop': 'https://bargeek.files.wordpress.com/2009/03/pbr_can.jpg',
  'Chad DonahueRasmussen Bike Shop': 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_GB/Red-Bull-Energy-Drink-Can-UK.png',
};

export const RacerIcon = ({name, team}) => (
  <span>
    {images[name+team] && <img src={images[name+team]} className="racer-icon" alt={name} />}
  </span>
);
