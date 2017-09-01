import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import { Spinner } from '../Spinner/Spinner';
import './Prediction.css';
import { getRacers, getRaces } from './Prediction.service';
import { PredictionRaces } from './PredictionRaces/PredictionRaces';

export class Prediction extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      races: [],
      racers: [],
    };
  }

  getRacersFromState(id) {
    const racers = this.state.racers.find(f => f.id === id);
    return racers ? racers.racers : undefined;
  }

  componentDidMount() {
    getRaces(this.props.match.params.year, this.props.match.params.id).then(races => {
      this.setState({ races });

      races.forEach(i => {
        getRacers(i.id).then(racers => {
          const currentRacers = this.state.racers;
          currentRacers.push({ id: i.id, racers });
          this.setState({ racers: currentRacers });
        });
      });
    });
  }

  render() {
    return (
      <Accordion>
        {this.state.races.length === 0
          ? <Spinner />
          : this.state.races.map((race, i) => <PredictionRaces key={i}
                                                               eventKey={i}
                                                               race={race}
                                                               racers={this.getRacersFromState(race.id)} />)}
      </Accordion>
    );
  }
}
