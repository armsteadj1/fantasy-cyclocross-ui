import React from 'react';
import { Panel, Table } from 'react-bootstrap';
import { RacerIcon } from '../../RacerIcon/RacerIcon';
import { Spinner } from '../../Spinner/Spinner';
import './PredictionRaces.css';

const racersInHeader = racers => racers && racers.length > 0 ? ` [ ${racers.length} Racer(s) ]` : '';

export const PredictionRaces = ({ race, racers, i, ...rest}) => (
  <Panel header={`${race.name}${racersInHeader(racers)}`} {...rest} >
    {!racers && <Spinner /> }
    {racers && racers.length === 0 && <span>There are currently no rad individuals registered.</span>}
    {racers && racers.length > 0 && <Table striped bordered condensed hover responsive >
      <thead>
      <tr>
        <th>(#) Points</th>
        <th>Name</th>
        <th>Team</th>
        <th>Location</th>
      </tr>
      </thead>
      <tbody>
      {racers.map((racer, num) =>
        <tr>
          <td>({num + 1}) {racer.points}</td>
          <td>{racer.name} <RacerIcon name={racer.name} team={racer.team} /></td>
          <td>{racer.team}</td>
          <td>{racer.location}</td>
        </tr>)}
      </tbody>
    </Table> }
  </Panel>
);



