import { shallow } from 'enzyme';
import React from 'react';
import { Panel, Table } from 'react-bootstrap';
import { shrug } from '../../../helpers/shrug';
import { Spinner } from '../../Spinner/Spinner';
import { RaceResults } from './RaceResults';
import { RacerIcon } from '../../RacerIcon/RacerIcon';

let opts;

const render = () => shallow(<RaceResults {...opts} />).find(Panel);

beforeEach(() => {
  opts = {
    extra: shrug.integer(),
    race: {
      name: shrug.first(),
    },
    results: [ {
      points: shrug.string(),
      placeInCat: shrug.string(),
      name: shrug.first(),
      team: shrug.last(),
      location: shrug.state()
    } ],
  };
});

it('will have a panel with the correct header', () => {
  opts.results = [];
  expect(render().props().header).toEqual(opts.race.name);
  expect(render().props().extra).toEqual(opts.extra);
});

it('panel displays a spinner if races undefined', () => {
  opts.results = undefined;
  expect(render()).toContainReact(<Spinner />);
});

it('panel displays no results yet if empty', () => {
  opts.results = [];
  expect(render()).toContainReact(<span>USAC appears to believe no one SENT IT on this race. Move along. :D</span>);
});

it('will have a table of all results', () => {
  expect(render()).toContainReact(
    <Table striped bordered condensed hover responsive >
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
      <tr>
        <td>(1) {opts.results[0].points}</td>
        <td>{opts.results[0].name} <RacerIcon name={opts.results[0].name} location={opts.results[0].location} /></td>
        <td>{opts.results[0].placeInCat}</td>
        <td>{opts.results[0].team}</td>
        <td>{opts.results[0].location}</td>
      </tr>
      </tbody>
    </Table>
  );
});