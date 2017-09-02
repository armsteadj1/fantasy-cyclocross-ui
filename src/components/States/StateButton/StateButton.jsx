import React from 'react';
import { Link } from 'react-router-dom';
import './StateButton.css';
import '../../States.css';

export const StateButton = ({ name, abbreviation }) => (
  <Link to={`/states/${abbreviation.toLowerCase()}/races`}
        className={`btn btn-default stateface stateface-${abbreviation.toLowerCase()}`} >{name}</Link>
);