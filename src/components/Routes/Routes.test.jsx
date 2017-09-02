import { shallow } from 'enzyme';
import React from 'react';
import { Switch } from 'react-router';
import { Home } from '../Home/Home';
import { Prediction } from '../Prediction/Prediction';
import { StateRaces } from '../StateRaces/StateRaces';
import { Routes } from './Routes';

let component;
beforeEach(() => {
  component = shallow(<Routes />).find(Switch);
});

it('has a route for home', () => {
  expect(component.childAt(0).props().path).toEqual('/');
  expect(component.childAt(0).props().component).toEqual(Home);
});

it('has a route for predictions', () => {
  expect(component.childAt(1).props().path).toEqual('/races/:year/:id/prediction');
  expect(component.childAt(1).props().component).toEqual(Prediction);
});

it('has a route for state races', () => {
  expect(component.childAt(2).props().path).toEqual('/state/:state/races');
  expect(component.childAt(2).props().component).toEqual(StateRaces);
});