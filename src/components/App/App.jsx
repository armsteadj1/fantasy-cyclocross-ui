import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';

export const App = ({ children }) => (
  <div className="container-fluid" >
    <Row>
      <Col xs={12} mdOffset={1} md={10} >
        { children }
      </Col>
    </Row>
  </div>
);
