import React from 'react';
import './RacerIcon.css';

const images = {
  'JOE PETERSENDES MOINES, IA': 'https://bargeek.files.wordpress.com/2009/03/pbr_can.jpg',
  'CHAD DONAHUEDES MOINES, IA': 'https://pbs.twimg.com/profile_images/631910654576713728/cX9NRswP.png',
  'STEPHEN HYDEEASTHAMPTON, MA': 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png',
  'KATHERINE COMPTONCOLORADO SPRINGS, CO': 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png',
  'JASON SCHOLBROCKDES MOINES, IA': 'http://www.taproduce.com/wp-content/uploads/2017/02/GreenLeaf_DSC3236-e1486411403980.png',
  'KYLE SEDOREDES MOINES, IA': 'https://apps.voxmedia.com/graphics/theverge-android-emoji/images/emoji_u1f918-0aab50d1.png',
};

export const RacerIcon = ({name, location}) => (
  <span>
    {images[name.trim().toUpperCase()+location.trim().toUpperCase()] && <img src={images[name.trim().toUpperCase()+location.trim().toUpperCase()]} className="racer-icon" alt={name} />}
  </span>
);
