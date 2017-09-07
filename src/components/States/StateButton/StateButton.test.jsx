import { shallow } from 'enzyme';
import React from 'react';
import { StateButton } from './StateButton';

it('returns a state button', () => {
  expect(shallow(<StateButton name="State" abbreviation="ia" />).props().to).toEqual('/states/ia/races');
  expect(shallow(<StateButton name="State" abbreviation="ia" />).props().className).toContain('stateface-ia');
  expect(shallow(<StateButton name="State" abbreviation="ia" />).props().children).toContain('State');
});

it('returns a state button to lower', () => {
  expect(shallow(<StateButton name="State" abbreviation="LA" />).props().to).toEqual('/states/la/races');
  expect(shallow(<StateButton name="State" abbreviation="LA" />).props().className).toContain('stateface-la');
  expect(shallow(<StateButton name="State" abbreviation="LA" />).props().children).toContain('State');
});
