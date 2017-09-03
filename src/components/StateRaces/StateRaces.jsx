import React, { Component } from 'react';
import { Col, Nav, Navbar, NavItem, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
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
    let state = this.props.match.params.state;

    return (
      <span>
        <Breadcrumbs state={state} />
      <Row>
        <Col xs={12} md={12} lg={10} lgOffset={1} >
        {this.state.races.length === 0 && <Spinner />}
          {this.state.races.map(race => {
            let url = `/states/${state}/races/${race.year}/${race.id}/${race.complete ? 'results' : 'prediction'}`;
            return (<Navbar>
              <Navbar.Header>
                <Navbar.Brand>
              <span className="hidden-xs" >
               {race.id
                 ? <Link to={url} >
                   {race.complete && <span><FontAwesome name="check-square" />&nbsp;&nbsp;</span> }
                   {`${race.name}`}
                   <small>
                     <small>
                       <small> - [ {race.city} ] - {race.date}</small>
                     </small>
                   </small>
                 </Link>
                 : <span>{`${race.name}`}
                   <small><small><small> - [ {race.city} ] - {race.date}</small></small></small></span>
               }
              </span>
                  <span className="visible-xs" >

               {race.id
                 ? <Link to={url} >
                   {race.complete && <span><FontAwesome name="check-square" />&nbsp;&nbsp;</span> }
                   {`${race.name}`}
                 </Link>
                 : <span>{`${race.name}`}</span>
               }
              </span>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                {race.id &&
                <Nav pullRight >
                  <NavItem className="visible-xs" >[ {race.city} ] - {race.date}</NavItem>
                  <NavItem href={url}>{race.complete ? 'Results' : 'Registraions'}</NavItem>
                  <NavItem target="_blank"
                           href={`https://www.usacycling.org/events/getflyer.php?permit=${race.year}-${race.id}`} >Flyer</NavItem>
                  {!race.complete && <NavItem target="_blank" href={`https://www.usacycling.org/register/${race.year}-${race.id}`} >Register</NavItem>}
                </Nav>
                }
                {!race.id &&
                <Nav pullRight >
                  <NavItem className="visible-xs" >[ {race.city} ] - {race.date}</NavItem>
                  <NavItem className="no-permit" >This race currently has no permit.</NavItem>
                </Nav>
                }
              </Navbar.Collapse>
            </Navbar>);
          })}
      </Col></Row>
      </span>
    );
  }
}