import React, {Component} from 'react';
import {Col, Label, ListGroup, ListGroupItem, Row} from 'react-bootstrap';
import {Spinner} from '../Spinner/Spinner';
import './TeamDetails.css';
import {getTeam} from './TeamDetails.service';
import NumberFormat from "react-number-format";
import ordinal from 'ordinal';
import {Link} from "react-router-dom";


export class TeamDetails extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {team: undefined};
    }

    componentDidMount() {
        this.doTeam();
    }

    render() {
        const team = this.state.team;
        return (
            <span>
                <Row>
                    <Col xs={12} md={12} lg={8} lgOffset={2}><Link to={"/results/points"}>Back to results</Link></Col>
                    <Col xs={12} md={12} lg={8} lgOffset={2}>
                         {!team
                             ? <Spinner/>
                             :
                             <span>
                                <h1>{team.name}</h1>
                                 <h4>{team.points} points</h4>
                                <ListGroup>
                                    {team.racers.map((racer, i) => [this.getRacer(racer), this.getRaces(racer)])}
                                </ListGroup>
                            </span>
                         }
                    </Col>
                </Row>
            </span>
        );
    }

    doTeam() {
        getTeam(this.props.match.params.id).then(team => this.setState({team}));
    }

    getRaces(racer) {
        return racer.results.map(race =>
            <ListGroupItem>
                <Row>
                    <Col xs={1} lg={1}><b>{ordinal(race.place)}</b></Col>
                    <Col xs={8} lg={9}>{race.competition_name} ({race.category})</Col>
                    <Col xs={2} lg={2} className={"text-right"}><NumberFormat value={race.points}
                                       decimalScale={0}
                                       fixedDecimalScale={true}
                                       displayType={'text'}
                                       thousandSeparator={true}/> points</Col>
                </Row>
            </ListGroupItem>
        );
    }

    getRacer(racer) {
        return (
            <ListGroupItem className="racer_row">
                <Row>
                    <Col xs={10}><b>{racer.name}</b> {!racer.active && <Label bsStyle="danger">inactive</Label>} </Col>
                    <Col xs={2} className={"text-right"}><NumberFormat value={racer.points}
                                              decimalScale={0}
                                              fixedDecimalScale={true}
                                              displayType={'text'}
                                              thousandSeparator={true}/> points</Col>
                </Row>
            </ListGroupItem>);
    }
}
