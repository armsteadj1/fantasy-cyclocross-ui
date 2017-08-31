import * as cheerio from 'cheerio';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Accordion, Panel, Table, Row, Col } from 'react-bootstrap';
import rp from 'request-promise';
import "./Prediction.css";
import "../FontAwesome.css";

export class Prediction extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      races: [],
      racers: [],
    };
  }
  
  getImage(person) {
    const images = {
      'Joe PetersenRasmussen Bike Shop': 'https://bargeek.files.wordpress.com/2009/03/pbr_can.jpg',
      'Chad DonahueRasmussen Bike Shop': 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_GB/Red-Bull-Energy-Drink-Can-UK.png',
    };
    
    return images[person];
  }

  getRacers(id) {
    return new Promise(resolve => {
      rp({
        uri: `https://api.usacx.co/predictions?race=${id}`,
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
      }).then(response => {
        const racers = [];
        const data = cheerio.load(response);
        const racerRows = data('table').find('tr');
        racerRows.each((i, r) => {
            const name = data(r).find('td:nth-child(2)').text();
            const team = data(r).find('td:nth-child(3)').text();
            racers.push({
              rank: data(r).find('td:nth-child(1)').text(),
              name,
              team,
              location: data(r).find('td:nth-child(4)').text(),
              points: data(r).find('td:nth-child(5)').text(),
              image: this.getImage(name+team),
            });
        });
        
        resolve(racers.filter(r => r.name !== ""));
      });
    });
  }

  componentDidMount() {
    rp({
      uri: 'https://api.usacx.co/registration-races?eventid=1526&year=2017',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    }).then(response => {
        const races = [];
        const data = cheerio.load(response);
        const raceTables = data('table').find('td').find('table');
        raceTables.each((i, r) => {
          const date = data(r).find('td:nth-child(1)').text();
          const gender = data(r).find('td:nth-child(3)').text();
          const race = data(r).find('td:nth-child(4)').text();
          const id = data(r).parent().parent().next().attr('id').substring(3);

          races.push({
            id,
            name: `${date} - ${gender} - ${race}`,
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

  spinner() { 
    return (<Row><Col className="text-center"><FontAwesome name="circle-o-notch" className="font-awesome-large" spin /></Col></Row>);
  }
  
  render() {
    return (<Accordion>
      {this.state.races.length === 0 && this.spinner()}
      {this.state.races.length !== 0 && this.state.races.map((r, i) => 
      <Panel header={`${r.name} ${this.state.racers.find(f => f.id === r.id) ? `(${this.state.racers.find(f => f.id === r.id).racers.length} racers)` : ''}`} eventKey={i}>
        {!this.state.racers.find(f => f.id === r.id) && this.spinner()} 
        {this.state.racers.find(f => f.id === r.id) && 
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
            {this.state.racers.find(f => f.id === r.id).racers.map(racer =>
              <tr>
                <td>{racer.points}</td>
                <td>{racer.name} {racer.image ?? `<img src="${racer.image}" />`}</td>
                <td>{racer.team}</td>
                <td className="hidden-xs" >{racer.location}</td>
              </tr>)}
            </tbody>
          </Table>}

      </Panel>)}
      </Accordion>
    );
  }
}
