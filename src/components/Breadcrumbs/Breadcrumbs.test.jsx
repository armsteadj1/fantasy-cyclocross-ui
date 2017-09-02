import React from 'react';
import { shallow } from 'enzyme';
import { Breadcrumbs } from './Breadcrumbs';
import { Link } from 'react-router-dom';

it('returns link to the state', () => {
  expect(shallow(<Breadcrumbs state="ia" />).find(Link).at(1).props().to)
    .toEqual("/states/ia/races");
  expect(shallow(<Breadcrumbs state="ia" />).find(Link).at(1).props().children)
    .toEqual("IOWA");
});
