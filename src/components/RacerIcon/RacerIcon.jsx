import React from 'react';
import './RacerIcon.css';

const images = {
  'Joe PetersenDes Moines, IA': 'https://bargeek.files.wordpress.com/2009/03/pbr_can.jpg',
  'Chad DonahueDes Moines, IA': 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_GB/Red-Bull-Energy-Drink-Can-UK.png',
  'Stephen HydeEasthampton, MA': 'https://images.vexels.com/media/users/3/128974/isolated/preview/2109e6c1876ec147437565f9dceec14c-usa-flag-flying-eagle-by-vexels.png',
  'Katherine ComptonColorado Springs, CO': 'https://images.vexels.com/media/users/3/128974/isolated/preview/2109e6c1876ec147437565f9dceec14c-usa-flag-flying-eagle-by-vexels.png',
};

export const RacerIcon = ({name, location}) => (
  <span>
    {images[name+location] && <img src={images[name+location]} className="racer-icon" alt={name} />}
  </span>
);
