import React from 'react';
import { shallow } from 'enzyme';
import { RacerIcon } from './RacerIcon';

it('returns Joes Icon', () => {
  expect(shallow(<RacerIcon name="Joe Petersen" team="Rasmussen Bike Shop" />))
    .toContainReact(
      <img src="https://bargeek.files.wordpress.com/2009/03/pbr_can.jpg" className="racer-icon" alt="Joe Petersen"/>
    );
});

it('returns Chads Icon', () => {
  expect(shallow(<RacerIcon name="Chad Donahue" team="Rasmussen Bike Shop" />))
    .toContainReact(
      <img src="http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_GB/Red-Bull-Energy-Drink-Can-UK.png" className="racer-icon" alt="Chad Donahue"/>
    );
});
