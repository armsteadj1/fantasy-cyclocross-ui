import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { states } from '../../helpers/USStates.service';
import { distance, getLocation } from './GeoIp.service';
import { StateButton } from './StateButton/StateButton';
import './States.css';

export class States extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      states: this.getStateGroups(states.slice(0))
    };
  }

  getStateGroups = states => {
    const statesArray = [];
    while (states.length) {
      statesArray.push(states.splice(0, 4));
    }
    return statesArray;
  };

  componentDidMount() {
    getLocation().then(location => {
      const s = states.map(state => {
        state.distance = distance(state, location);
        return state;
      });

      this.setState({
        states: this.getStateGroups(s.slice(0).sort((a,b) => a.distance - b.distance))
      })
    });
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
    )
  };
}
