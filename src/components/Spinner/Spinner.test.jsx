import React from 'react';
import { shallow } from 'enzyme';
import FontAwesome from 'react-fontawesome';
import { Spinner } from './Spinner';
import { Col, Row } from 'react-bootstrap';

it('has a spinner', () => {
  expect(shallow(<Spinner />))
    .toContainReact(
      <Row><Col className="text-center"><FontAwesome name="circle-o-notch" className="font-awesome-large" spin /></Col></Row>
    );
});
