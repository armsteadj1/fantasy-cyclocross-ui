import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './States.css';
import { Link } from 'react-router-dom';

export const States = () => (
  <span>
  <Row><Col className="text-center" ><Link to={'/state/ia/races'} >Iowa</Link> </Col></Row>
  <Row><Col className="text-center" ><Link to={'/state/wi/races'} >Wisconsin</Link> </Col></Row>
  </span>
);
