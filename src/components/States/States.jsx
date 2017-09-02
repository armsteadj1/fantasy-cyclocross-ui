import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import { StateButton } from './StateButton/StateButton';
import './States.css';

export const States = () => (
  <span>
  <Row>
      <Col className="text-center important-info">
        Be awesome, checkout a state's cyclocross races <FontAwesome name="hand-o-down" />
        <br />
        <br />
      </Col>
    </Row>
  <Row className="state-row" >
    <Col md={3} sm={6} xs={12} >
      <StateButton name="ALABAMA" abbreviation="al" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="ALASKA" abbreviation="ak" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="ARIZONA" abbreviation="AZ" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="ARKANSAS" abbreviation="AR" />
    </Col>
  </Row>
  <Row className="state-row" >
    <Col md={3} sm={6} xs={12} >
      <StateButton name="CALIFORNIA" abbreviation="CA" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="COLORADO" abbreviation="CO" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="CONNECTICUT" abbreviation="CT" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="DELAWARE" abbreviation="DE" />
    </Col>
  </Row>
  <Row className="state-row" >
    <Col md={3} sm={6} xs={12} >
      <StateButton name="FLORIDA" abbreviation="FL" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="GEORGIA" abbreviation="GA" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="HAWAII" abbreviation="HI" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="IDAHO" abbreviation="ID" />
    </Col>
  </Row>
  <Row className="state-row" >
    <Col md={3} sm={6} xs={12} >
      <StateButton name="ILLINOIS" abbreviation="IL" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="INDIANA" abbreviation="IN" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="IOWA" abbreviation="IA" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="KANSAS" abbreviation="KS" />
    </Col>
  </Row>
  <Row className="state-row" >
    <Col md={3} sm={6} xs={12} >
      <StateButton name="KENTUCKY" abbreviation="KY" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="LOUISIANA" abbreviation="LA" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="MAINE" abbreviation="ME" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="MARYLAND" abbreviation="MD" />
    </Col>
  </Row>
  <Row className="state-row" >
    <Col md={3} sm={6} xs={12} >
      <StateButton name="MASSACHUSETTS" abbreviation="MA" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="MICHIGAN" abbreviation="MI" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="MINNESOTA" abbreviation="MN" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="MISSISSIPPI" abbreviation="MS" />
    </Col>
  </Row>
  <Row className="state-row" >
    <Col md={3} sm={6} xs={12} >
      <StateButton name="MISSOURI" abbreviation="MO" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="MONTANA" abbreviation="MT" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="NEBRASKA" abbreviation="NE" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="NEVADA" abbreviation="NV" />
    </Col>
  </Row>
  <Row className="state-row" >
    <Col md={3} sm={6} xs={12} >
      <StateButton name="NEW HAMPSHIRE" abbreviation="NH" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="NEW JERSEY" abbreviation="NJ" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="NEW MEXICO" abbreviation="NM" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="NEW YORK" abbreviation="NY" />
    </Col>
  </Row>
  <Row className="state-row" >
   <Col md={3} sm={6} xs={12} >
      <StateButton name="NORTH CAROLINA" abbreviation="NC" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="NORTH DAKOTA" abbreviation="ND" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="OHIO" abbreviation="OH" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="OKLAHOMA" abbreviation="OK" />
    </Col>
  </Row>
  <Row className="state-row" >
    <Col md={3} sm={6} xs={12} >
      <StateButton name="OREGON" abbreviation="OR" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="PENNSYLVANIA" abbreviation="PA" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="RHODE ISLAND" abbreviation="RI" />
    </Col>
    <Col md={3} sm={6} xs={12} >
      <StateButton name="SOUTH CAROLINA" abbreviation="SC" />
    </Col>
  </Row>
  <Row className="state-row" >
       <Col md={3} sm={6} xs={12} >
        <StateButton name="SOUTH DAKOTA" abbreviation="SD" />
      </Col>
      <Col md={3} sm={6} xs={12} >
        <StateButton name="TENNESSEE" abbreviation="TN" />
      </Col>
      <Col md={3} sm={6} xs={12} >
        <StateButton name="TEXAS" abbreviation="TX" />
      </Col>
      <Col md={3} sm={6} xs={12} >
        <StateButton name="UTAH" abbreviation="UT" />
      </Col>
    </Row>
    <Row className="state-row" >
      <Col md={3} sm={6} xs={12} >
        <StateButton name="VERMONT" abbreviation="VT" />
      </Col>
      <Col md={3} sm={6} xs={12} >
        <StateButton name="VIRGINIA" abbreviation="VA" />
      </Col>
      <Col md={3} sm={6} xs={12} >
        <StateButton name="WASHINGTON" abbreviation="WA" />
      </Col>
      <Col md={3} sm={6} xs={12} >
        <StateButton name="WEST VIRGINIA" abbreviation="WV" />
      </Col>
    </Row>
    <Row className="state-row" >
      <Col md={3} sm={6} xs={12} >
        <StateButton name="WISCONSIN" abbreviation="WI" />
      </Col>
      <Col md={3} sm={6} xs={12} >
        <StateButton name="WYOMING" abbreviation="WY" />
      </Col>
      <Col md={3} sm={6} xs={12} ></Col>
      <Col md={3} sm={6} xs={12} ></Col>
    </Row>
  </span>
);
