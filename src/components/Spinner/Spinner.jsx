import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import './Spinner.css';

export const Spinner = () => (
  <Row><Col className="text-center"><FontAwesome name="circle-o-notch" className="font-awesome-large" spin /></Col></Row>
);
