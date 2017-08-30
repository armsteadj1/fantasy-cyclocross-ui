import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import { Prediction } from './components/Prediction/Prediction';
import { Results } from './components/Results/Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <div className="container-fluid">
            <Row>
              <Col xs={12} mdOffset={1} md={10}>
                <Results />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
