import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Results.css';
import { getResultDays, getResults } from './Results.service';

export class Results extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      days: [],
      results: [],
    };
  }

  componentDidMount() {
    getResultDays(this.props.match.params.year, this.props.match.params.id)
      .then(days => {
        this.setState({ days: days.days });

        days.days.forEach(r => {
          getResults(r.id, days.usac).then(results => {
            const currentResults = this.state.results;
            currentResults.push({ id: r.id, results });
            this.setState({ results: currentResults });
          });
        });
      });
  }

  render() {
    console.log(this.state.results)
    return (
      <Row><Col className="text-center" >
        {this.state.days.map(race =>
          <h3>{race.day}</h3>
        )}
      </Col></Row>);
  }
}