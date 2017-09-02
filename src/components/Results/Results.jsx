import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './Results.css';

export class Results extends Component {
  render() {
    return (
      <Row><Col className="text-center" >
        <h1>
          Coding can wait, We are currently racing our bikes! Go Ride! <FontAwesome name="hand-lizard-o" />
        </h1>
      </Col></Row>);
  }
}