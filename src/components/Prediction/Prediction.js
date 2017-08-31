import * as cheerio from 'cheerio';
import React, { Component } from 'react';
import { Panel, Table } from 'react-bootstrap';
import rp from 'request-promise';

export class Prediction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      races: [],
      racers: [],
    };
  }

  getRacers(id) {
    return new Promise(resolve => {
      rp({
        uri: `http://localhost:3000/myusac/include/registration.php?pagename=registration&race=${id}&mode=predictor`,
        headers: { accept: 'application/json' },
      }).then(response => {
        const racers = [];
        const data = cheerio.load(response);
        const racerRows = data('table').find('tr').slice(2);
        racerRows.each((i, r) => {
          racers.push({
            rank: data(r).find('td:nth-child(1)').text(),
            name: data(r).find('td:nth-child(2)').text(),
            team: data(r).find('td:nth-child(3)').text(),
            location: data(r).find('td:nth-child(4)').text(),
            points: data(r).find('td:nth-child(5)').text(),
          })
        });

        resolve(racers);
      });
    });
  }

  componentDidMount() {
    rp({
      uri: 'http://localhost:3000/myusac/include/registration.php?eventid=1526&year=2017&mode=registrations',
      headers: { accept: 'application/json' },
    }).then(response => {
        const races = [];
        const data = cheerio.load(response);
        const raceTables = data('table').find('td').find('table');
        raceTables.each((i, r) => {
          const gender = data(r).find('td:nth-child(3)').text();
          const race = data(r).find('td:nth-child(4)').text();
          const id = data(r).parent().parent().next().attr('id').substring(3);

          races.push({
            id,
            name: `${gender} - ${race}`,
          });
        });

        this.setState({ races });

        this.state.races.forEach(i => {
          this.getRacers(i.id).then(racers => {
            const currentRacers = this.state.racers;
            currentRacers.push({ id: i.id, racers });
            this.setState({ racers: currentRacers });
          });
        })
      }
    );
  }

  render() {
    return (<span>
      {this.state.races.map(r => <Panel header={r.name} >
        <Table striped bordered condensed hover responsive >
          <thead>
          <tr>
            <th>Points</th>
            <th>Name</th>
            <th>Team</th>
            <th className="hidden-xs" >Location</th>
          </tr>
          </thead>
          <tbody>
          {this.state.racers.find(f => f.id === r.id) &&
          this.state.racers.find(f => f.id === r.id).racers.map(racer =>
            <tr>
              <td>{racer.points}</td>
              <td>{racer.name}</td>
              <td>{racer.team}</td>
              <td className="hidden-xs" >{racer.location}</td>
            </tr>)}
          </tbody>
        </Table>

      </Panel>)}
      </span>
    );
  }
}
