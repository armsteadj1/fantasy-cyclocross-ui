import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { RaceResults } from './RaceResults/RaceResults';
import './Results.css';
import { getDayRaces, getResultDays, getResults } from './Results.service';

export class Results extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      days: [],
      dayRaces: [],
      results: []
    };
  }

  componentDidMount() {
    getResultDays(this.props.match.params.year, this.props.match.params.id)
      .then(days => {
        this.setState({ name: `${days.name} Results` });
        this.setState({ days: days.days });
        this.setState({ usac: days.usac });

        days.days.forEach(r => {
          getDayRaces(r.id, days.usac).then(races => {
            const currentDayRaces = this.state.dayRaces;
            currentDayRaces.push({ id: r.id, races });
            this.setState({ dayRaces: currentDayRaces });
          });
        });
      });
  }

  getResultsFor(id) {
    if(this.state.results.filter(res => id === res.id).length === 0) {
      getResults(id, this.state.usac).then(results => {
        const currentResults = this.state.results;
        currentResults.push({ id: id, results: results.results });
        this.setState({ results: currentResults });
      });
    }
  }

  render() {
    return (
      <span>
        <Breadcrumbs state={this.props.match.params.state} race={this.state.name} />
        <Accordion>
        {this.state.days.map((day, i) =>
          <Panel header={`${day.day}`} eventKey={i} >
            <Accordion>
              {
                this.state.dayRaces.filter(r => r.id === day.id)[ 0 ] &&
                this.state.dayRaces.filter(r => r.id === day.id)[ 0 ].races.map((race, ir) => {
                  const racersObject = this.state.results.filter(res => race.id === res.id)[ 0 ];
                  const racers = racersObject ? racersObject.results : undefined;
                  return (<RaceResults key={ir}
                                       eventKey={ir}
                                       race={race}
                                       results={racers}
                                       getResults={() => this.getResultsFor(race.id)}/>)
                })
              }
            </Accordion>
          </Panel>
        )}
        </Accordion>
      </span>);
  }
}


