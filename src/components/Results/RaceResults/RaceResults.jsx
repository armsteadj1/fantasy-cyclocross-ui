import React from 'react';
import { Panel, Table } from 'react-bootstrap';
import { RacerIcon } from '../../RacerIcon/RacerIcon';
import { Spinner } from '../../Spinner/Spinner';
import './RaceResults.css';

export const RaceResults = ({ race, results, getResults, ...rest}) => (
  <Panel header={`${race.name}`} onEnter={getResults} {...rest} >
    {!results && <Spinner /> }
    {results && results.length === 0 && <span>USAC appears to believe no one SENT IT on this race. Move along. :D</span>}
    {results && results.length > 0 && <Table striped bordered condensed hover responsive >
      <thead>
      <tr>
        <th>(#) Points</th>
        <th>Name</th>
        <th># - Cat</th>
        <th>Team</th>
        <th>Location</th>
      </tr>
      </thead>
      <tbody>
      {results.map((racer, num) =>
        <tr>
          <td>({num + 1}) {racer.points}</td>
          <td>{racer.name} <RacerIcon name={racer.name} location={racer.location} /></td>
          <td>{racer.placeInCat}</td>
          <td>{racer.team}</td>
          <td>{racer.location}</td>
        </tr>)}
      </tbody>
    </Table> }
  </Panel>
);
