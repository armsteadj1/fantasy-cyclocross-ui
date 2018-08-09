import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './App.css';
import logo from './fantasycx.jpg'
import {Link} from "react-router-dom";

export const App = ({ children }) => (
  <div className="container-fluid" >
    <Row>
      <Col xs={6} xsOffset={3} sm={4} smOffset={4}>
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
  </div>
);
