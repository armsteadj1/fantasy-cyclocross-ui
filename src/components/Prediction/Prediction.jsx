import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import { Spinner } from '../Spinner/Spinner';
import './Prediction.css';
import { getRacers, getRaces } from './Prediction.service';
import { PredictionRaces } from './PredictionRaces/PredictionRaces';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

export class Prediction extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      races: [],
      results: [],
    };
  }

  getRacersFromState(id) {
    const racers = this.state.results.find(f => f.id === id);
    return racers ? racers.results : undefined;
  }

  componentDidMount() {
    getRaces(this.props.match.params.year, this.props.match.params.id).then(races => {
      this.setState({ races: races.races, name: races.name });

      races.races.forEach(i => {
        getRacers(i.id).then(racers => {
          const currentRacers = this.state.results;
          currentRacers.push({ id: i.id, results });
          this.setState({ results: currentRacers });
        });
      });
    });
  }

  render() {
    return (
      <span>
      <Breadcrumbs state={this.props.match.params.state} race={this.state.name} />
      <Accordion>
        {this.state.races.length === 0
          ? <Spinner />
          : this.state.races.map((race, i) => <PredictionRaces key={i}
                                                               eventKey={i}
                                                               race={race}
                                                               racers={this.getRacersFromState(race.id)} />)}
      </Accordion>
      </span>
    );
  }
}
