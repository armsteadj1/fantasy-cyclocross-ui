import { shallow } from 'enzyme';
import React from 'react';
import { Switch } from 'react-router';
import { Prediction } from '../Prediction/Prediction';
import { Routes } from './Routes';

let component;
beforeEach(() => {
  component = shallow(<Routes />).find(Switch);
});

it('has a route for home', () => {
  expect(component.childAt(0).props().path).toEqual('/');
  expect(component.childAt(0).props().component).toEqual(Prediction);
});

it('has a route for predictions', () => {
  expect(component.childAt(1).props().path).toEqual('/races/:year/:id');
  expect(component.childAt(1).props().component).toEqual(Prediction);
});