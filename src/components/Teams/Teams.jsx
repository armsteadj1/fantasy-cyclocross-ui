import React, {Component} from 'react';
import {Checkbox, Col, ListGroup, ListGroupItem, Row, Table} from 'react-bootstrap';
import {Spinner} from '../Spinner/Spinner';
import './Teams.css';
import {getTeams} from './Teams.service';
import NumberFormat from "react-number-format";
import ReactCountryFlag from 'react-country-flag';

export class Teams extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {teams: undefined};

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
                <Row>
                <Col xs={12} md={12} lg={10} lgOffset={1}>
                {!this.state.teams
                    ? <Spinner/>
                    :
                    this.state.teams.map(team =>
                    <span>
                        <h1>{team.name}</h1>
                        <h5>{team.owner}</h5>
                        <ListGroup>
                            {team.uci_racers.map(racer =>
                                <ListGroupItem>
                                    <ReactCountryFlag code={racer.country_short}/>
                                    {racer.name}
                                    (<NumberFormat value={racer.cost} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/>)
                                </ListGroupItem>
                            )}
                        <ListGroupItem>
                            <NumberFormat
                                value={team.uci_racers.reduce((cost, r) => cost + parseFloat(r.cost), 0.0)}
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
      </span>
        );
    }
}