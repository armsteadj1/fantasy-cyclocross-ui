import { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';
import { Col, Row } from 'react-bootstrap';

it('renders children in a span', () => {
  expect(shallow(<App>testing</App>)).toContainReact(
    <div className="container-fluid" >
      <Row>
        <Col xs={12} mdOffset={1} md={10} >
          testing
        </Col>
      </Row>
    </div>);
});
