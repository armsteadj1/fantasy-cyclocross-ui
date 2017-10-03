import React from 'react';
import './RacerIcon.css';

const images = {
  'JOE PETERSENDES MOINES, IA': 'https://bargeek.files.wordpress.com/2009/03/pbr_can.jpg',
  'CHAD DONAHUEDES MOINES, IA': 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_GB/Red-Bull-Energy-Drink-Can-UK.png',
  'STEPHEN HYDEEASTHAMPTON, MA': 'https://cdn.pixabay.com/photo/2016/04/06/13/18/american-flag-1311744_960_720.png',
  'KATHERINE COMPTONCOLORADO SPRINGS, CO': 'https://cdn.pixabay.com/photo/2016/04/06/13/18/american-flag-1311744_960_720.png',
};

export const RacerIcon = ({name, location}) => (
  <span>
    {images[name.trim().toUpperCase()+location.trim().toUpperCase()] && <img src={images[name.trim().toUpperCase()+location.trim().toUpperCase()]} className="racer-icon" alt={name} />}
  </span>
);
