import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
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
        <ListGroup>
          {this.state.races.map(race => <ListGroupItem header={`${race.name} [ ${race.city} ]`} >
            {race.date} <br />
            {race.id &&
            <span>
                <Link to={`/races/${race.year}/${race.id}/prediction`} >Registrations</Link> < br />
                <a target="_blank"
                   href={`https://www.usacycling.org/events/getflyer.php?permit=${race.year}-${race.id}`} >Flyer</a> <br />
                <a target="_blank" href={`https://www.usacycling.org/register/${race.year}-${race.id}`} >Register</a>
              </span>
            }
            {!race.id &&
              <span className="no-permit">This race currently has no permit.</span>
            }
            <br /> <br />
          </ListGroupItem>)}
        </ListGroup>
      </span>
    );
  }
}