import React from 'react';
import { shallow } from 'enzyme';
import { States } from '../States/States';

let component;
beforeEach(() => {
  component = shallow(<Home />);
});

it('has states', () => {
  expect(component).toContainReact(<States />);
});

