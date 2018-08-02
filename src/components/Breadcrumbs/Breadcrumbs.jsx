import React from 'react';
import {Breadcrumb, DropdownButton, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { byAbbreviation } from '../../helpers/USStates.service';
import './Breadcrumbs.css';

export const Breadcrumbs = ({ state, race, year }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/" >States</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={`/states/${state.toLowerCase()}/races`}
              className={`stateface stateface-${state.toLowerCase()}`} >{byAbbreviation(state).name}</Link>
      </Breadcrumb.Item>
            <Breadcrumb.Item>
                <DropdownButton title={year} id={'theyears'}>
                    <MenuItem><Link to={`/states/${state.toLowerCase()}/races/2018`}>2018</Link></MenuItem>
                    <MenuItem><Link to={`/states/${state.toLowerCase()}/races/2017`}>2017</Link></MenuItem>
                    <MenuItem><Link to={`/states/${state.toLowerCase()}/races/2016`}>2016</Link></MenuItem>
                    <MenuItem><Link to={`/states/${state.toLowerCase()}/races/2015`}>2015</Link></MenuItem>
                    <MenuItem><Link to={`/states/${state.toLowerCase()}/races/2014`}>2014</Link></MenuItem>
                    <MenuItem><Link to={`/states/${state.toLowerCase()}/races/2013`}>2013</Link></MenuItem>
                    <MenuItem><Link to={`/states/${state.toLowerCase()}/races/2012`}>2012</Link></MenuItem>
                    <MenuItem><Link to={`/states/${state.toLowerCase()}/races/2011`}>2011</Link></MenuItem>
                    <MenuItem><Link to={`/states/${state.toLowerCase()}/races/2010`}>2010</Link></MenuItem>
                    <MenuItem><Link to={`/states/${state.toLowerCase()}/races/2009`}>2009</Link></MenuItem>
                    <MenuItem><Link to={`/states/${state.toLowerCase()}/races/2008`}>2008</Link></MenuItem>
                </DropdownButton>

                {/*<Link to={`/states/${state.toLowerCase()}/races/${year}`}>{year}</Link>*/}
            </Breadcrumb.Item>
      {race && <Breadcrumb.Item>{race}</Breadcrumb.Item>}
    </Breadcrumb>);
};

