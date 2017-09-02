import React from 'react';
import '../../RacerIcon/RacerIcon.css';
import ua from 'universal-analytics';

export const Analytics = () => {
  ua("UA-105800781-1").pageview(window.location.pathname).send();
  return (<span />);
};
