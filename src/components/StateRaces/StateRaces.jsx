import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';
import './StateRaces.css';
import { getRaces } from './StateRaces.service';

export class StateRaces extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { races: [] };

  }

  componentDidMount() {
    getRaces(this.props.match.params.state.toUpperCase(), '2017').then(races => this.setState({ races }));
  }
  
  render() {
    return (
      <span>
        {this.state.races.length === 0 && <Spinner />}
          {this.state.races.map(race => 
          <Navbar header={`${race.name} [ ${race.city} ]`} >
           <Navbar.Header>
            <Navbar.Brand>
              <Link to={`/races/${race.year}/${race.id}/prediction`} >{`${race.name} [ ${race.city} ]`} - <small>{race.date}</small></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <Nav pullRight>
              {race.id &&
                <span>
                  <NavItem target="_blank" href={`https://www.usacycling.org/events/getflyer.php?permit=${race.year}-${race.id}`}>Flyer</NavItem>
                  <NavItem target="_blank" href={`https://www.usacycling.org/register/${race.year}-${race.id}`}>Register</NavItem>
                </span>
              }
              {!race.id &&
                <Navbar.Text className="no-permit">This race currently has no permit.</Navbar.Text>
              }
              </Nav>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
          )}
      </span>
    );
  }
}