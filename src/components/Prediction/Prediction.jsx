import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Spinner } from '../Spinner/Spinner';
import './Prediction.css';
import { getRacers, getRaces } from './Prediction.service';
import { PredictionRaces } from './PredictionRaces/PredictionRaces';

export class Prediction extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      races: undefined,
      racers: [],
    };
  }

  getRacersFromState(id) {
    const racers = this.state.racers.find(f => f.id === id);
    return racers ? racers.racers : undefined;
  }

  componentDidMount() {
    getRaces(this.props.match.params.year, this.props.match.params.id).then(races => {
      const actualRaces = races.races ? races.races : [];
      this.setState({
        races: actualRaces,
        name: races.name,
        registrationNotHere: races.races === undefined
      });

      if (races.races) {
        races.races.forEach(i => {
          getRacers(i.id).then(racers => {
            const currentRacers = this.state.racers;
            currentRacers.push({ id: i.id, racers });
            this.setState({ racers: currentRacers });
          });
        });
      }
    });
  }

  render() {
    return (
      <span>
      <Breadcrumbs state={this.props.match.params.state} race={this.state.name} />
      <Accordion>
        {this.state.registrationNotHere
          ? <h2 className="text-center" >This race must be too cool for USAC and has it's registration else where, BikeReg?</h2>
          : (!this.state.races
            ? <Spinner />
            : this.state.races.length === 0
              ?
              <h2 className="text-center" >Currently this race doesn't appear to have any awesome people registered, go
                register!</h2>
              : this.state.races.map((race, i) => <PredictionRaces key={i}
                                                                   eventKey={i}
                                                                   race={race}
                                                                   racers={this.getRacersFromState(race.id)} />))
        }
      </Accordion>
      </span>
    );
  }
}
