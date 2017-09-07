import React from 'react';
import '../../RacerIcon/RacerIcon.css';
import ua from 'universal-analytics';
import uuid from 'uuid/v4';
import Cookie from 'js-cookie';

export const Analytics = () => {
  const id = Cookie.get('analytics_id');
  if(!id) {
    Cookie.set('analytics_id', uuid());
  }

  ua("UA-105800781-1", Cookie.get('analytics_id')).pageview(window.location.pathname).send();
  return (<span />);
};
