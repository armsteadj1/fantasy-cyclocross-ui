import React, {Component} from 'react';
import {Col, Label, ListGroup, ListGroupItem, Row} from 'react-bootstrap';
import {Spinner} from '../Spinner/Spinner';
import './Teams.css';
import {getTeams} from './Teams.service';
import NumberFormat from "react-number-format";
import ReactCountryFlag from 'react-country-flag';

export class Teams extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {teams: undefined, password: ''};

    }

    componentDidMount() {
        this.doRaces();
    }

    doRaces() {
        getTeams().then(teams => {
            this.setState({teams})
        });
    }

    render() {
        return (
            <span>
            {
                this.state.password.toLowerCase() !== 'radness'
                    ? <span>Password: <input type="text" onChange={(event) => this.setState({password: event.target.value})} /></span>
                    : <Row>
                        <Col xs={12} md={12} lg={10} lgOffset={1}>
                            {!this.state.teams
                                ? <Spinner/>
                                :
                                this.state.teams.map(team =>
                                        <span>
                        <h1>{team.name}</h1>
                        <h5>{team.owner}</h5>
                        <ListGroup>
                            {team.racers.map(racer =>
                                <ListGroupItem>
                                    <ReactCountryFlag code={racer.country_short}/>
                                    {racer.name}
                                    (<NumberFormat value={racer.cost} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/>)
                                    {!racer.active  && <Label bsStyle="danger">inactive</Label>}
                                </ListGroupItem>
                            )}
                            <ListGroupItem>
                            <NumberFormat
                                value={team.racers.filter(r => r.active).reduce((cost, r) => cost + parseFloat(r.cost), 0.0)}
                                decimalScale={2}
                                fixedDecimalScale={true}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                        </ListGroupItem>
                        </ListGroup>
                        </span>
                                )
                            }
                        </Col>
                    </Row>
            }
      </span>
        );
    }
}