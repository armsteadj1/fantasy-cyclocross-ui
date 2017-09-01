import { shallow } from 'enzyme';
import React from 'react';
import { Panel, Table } from 'react-bootstrap';
import { shrug } from '../../../helpers/shrug';
import { Spinner } from '../../Spinner/Spinner';
import { PredictionRaces } from './PredictionRaces';
import { RacerIcon } from '../../RacerIcon/RacerIcon';

let opts;

const render = () => shallow(<PredictionRaces {...opts} />).find(Panel);

beforeEach(() => {
  opts = {
    extra: shrug.integer(),
    race: {
      name: shrug.first(),
    },
    racers: [ {
      points: shrug.string(),
      name: shrug.first(),
      team: shrug.last(),
      location: shrug.state()
    } ],
  };
});

it('will have a panel with the correct header', () => {
  opts.racers = [];
  expect(render().props().header).toEqual(opts.race.name);
  expect(render().props().extra).toEqual(opts.extra);
});

it('will show number of racers in header', () => {
  expect(render().props().header).toEqual(`${opts.race.name} [ 1 Racer(s) ]`);
});

it('panel displays a spinner if races undefined', () => {
  opts.racers = undefined;
  expect(render()).toContainReact(<Spinner />);
});

it('panel displays no racers yet if empty', () => {
  opts.racers = [];
  expect(render()).toContainReact(<span>There are currently no rad individuals registered.</span>);
});

it('will have a table of all racers', () => {
  expect(render()).toContainReact(
    <Table striped bordered condensed hover responsive >
      <thead>
      <tr>
        <th>Points</th>
        <th>Name</th>
        <th>Team</th>
        <th>Location</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{opts.racers[0].points}</td>
        <td>{opts.racers[0].name} <RacerIcon name={opts.racers[0].name} team={opts.racers[0].team} /></td>
        <td>{opts.racers[0].team}</td>
        <td>{opts.racers[0].location}</td>
      </tr>
      </tbody>
    </Table>
  );
});