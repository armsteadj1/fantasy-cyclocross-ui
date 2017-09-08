import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { StateButton } from './StateButton/StateButton';
import './States.css';
import { states } from '../../helpers/USStates.service';

export class States extends React.Component {
  constructor(state) {
    super(state);
    const statesArray = [];
    while(states.length) {
      statesArray.push(states.splice(0, 4));
    }
    this.state = {
      states: statesArray
    };
  }

  render() {
    return (<span>
              <Row>
                  <Col className="text-center important-info" >
                    Be awesome, checkout a state's cyclocross races <FontAwesome name="hand-o-down" />
                    <br />
                    <br />
                  </Col>
                </Row>
               {
                this.state.states.map(stateGroup =>
                  <Row className="state-row" >
                    {stateGroup.map(state =>
                      <Col md={3} sm={6} xs={12} >
                        <StateButton name={state.name} abbreviation={state.abbreviation} />
                      </Col>
                    )}
                  </Row>)
               }
               </span>
    )};
}
