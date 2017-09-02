import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { byAbbreviation } from '../../helpers/USStates.service';
import './Breadcrumbs.css';

export const Breadcrumbs = ({ state, race }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/" >States</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={`/states/${state.toLowerCase()}/races`}
              className={`stateface stateface-${state.toLowerCase()}`} >{byAbbreviation(state).name}</Link>
      </Breadcrumb.Item>
      {race && <Breadcrumb.Item>{race}</Breadcrumb.Item>}
    </Breadcrumb>);
};

