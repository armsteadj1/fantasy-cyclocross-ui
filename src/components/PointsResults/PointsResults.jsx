import React, {Component} from 'react';
import {Col, Label, ListGroup, ListGroupItem, Row} from 'react-bootstrap';
import {Spinner} from '../Spinner/Spinner';
import './PointsResults.css';
import {getTeams} from './PointsTeams.service';
import NumberFormat from "react-number-format";
import ReactCountryFlag from 'react-country-flag';
import { Icon } from 'react-icons-kit'
import { bullhorn } from 'react-icons-kit/icomoon/bullhorn'
import {Link} from "react-router-dom";


export class PointsResults extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {teams: undefined, password: ''};

    }

    componentDidMount() {
        this.doRaces();
    }

    render() {
        return (
            <span>
                <Row>
                    <Col xs={12} md={12} lg={6} lgOffset={3}>
                         {!this.state.teams
                             ? <Spinner/>
                             :
                             <span>
                                <ListGroup>
                                    {this.teamsByPoints().map((team, i) => [this.getTeam(i, team), this.getRacers(team)])}
                                </ListGroup>
                            </span>
                         }
                    </Col>
                </Row>
            </span>
        );
    }

    doRaces() {
        getTeams().then(teams => this.setState({teams}));
    }

    teamsByPoints() {
        return this.state.teams.sort((a, b) => b.points - a.points || a.id - b.id);
    }

    toggleShowRacers(team) {
        team.show_racers = !team.show_racers;
        const teams = this.state.teams;
        teams[teams.findIndex(t => t.name === team.name)] = team;
        this.setState({teams});
    }

    getRacers(team) {
        return team.show_racers && team.racers.map(racer =>
            <ListGroupItem>
                <ReactCountryFlag code={racer.country_short}/>
                {racer.name}
                <div className="points">
                    <NumberFormat value={racer.points}
                                  decimalScale={0}
                                  fixedDecimalScale={true}
                                  displayType={'text'}
                                  thousandSeparator={true}/> points
                </div>
                {!racer.active && <Label bsStyle="danger">inactive</Label>}
            </ListGroupItem>
        );
    }

    getTeam(i, team) {
        return (
            <ListGroupItem onClick={() => this.toggleShowRacers(team)}>
                <span className="rank">{i + 1}</span>
                <span className="teamName">{team.name}</span>
                <span className="owner"> ({team.owner})</span>
                <div className="horn"><Link to={`/teams/${team.id}`}><Icon icon={bullhorn} /></Link></div>
                <div className="points">
                    <NumberFormat value={team.points}
                                  decimalScale={0} fixedDecimalScale={true}
                                  displayType={'text'} thousandSeparator={true}/> points
                </div>
            </ListGroupItem>);
    }
}
