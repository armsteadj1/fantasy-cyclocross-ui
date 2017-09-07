import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './App.css';
import logo from './logo.png';
import { Analytics } from './Analytics/Analytics';
import { Link } from 'react-router-dom';

export const App = ({ children }) => (
  <div className="container-fluid" >
    <Analytics />
    <Row>
      <Col xs={6} xsOffset={3} sm={4} smOffset={4} >
        <Link to="/"><img src={logo} className="logo img-responsive" /></Link>
      </Col>
    </Row>
    <Row>
      <Col xs={12} mdOffset={1} md={10} >
        { children }
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <br />
        <br />
        Made with <FontAwesome name="heart" /> in Des Moines, Iowa.
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <a target="_blank" href="mailto:holla.at.usacx@gmail.com">Contact <FontAwesome name="hand-rock-o"/> </a>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <br />
        <Link to="/terms">Terms</Link> | <a target="_blank" href="https://www.iubenda.com/privacy-policy/8211639/">Privacy</a>
        <br />
        <br />
      </Col>
    </Row>

  </div>
);
