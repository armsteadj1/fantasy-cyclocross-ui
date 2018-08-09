import React, {Component} from 'react';
import {Checkbox, Col, ListGroup, ListGroupItem, Row, Table} from 'react-bootstrap';
import {Spinner} from '../Spinner/Spinner';
import './Racers.css';
import {getRacers} from './Racers.service';
import NumberFormat from "react-number-format";
import ReactCountryFlag from 'react-country-flag';

export class Racers extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {racers: undefined, selectedRacers: []};

    }

    componentDidMount() {
        this.doRaces();
    }

    doRaces() {
        getRacers().then(racers => {
            this.setState({racers})
        });
    }

    toggleRacer(racerId) {
        let selectedRacers = this.state.selectedRacers;
        if(selectedRacers.includes(racerId)) selectedRacers = selectedRacers.filter(x => x !== racerId);
        else selectedRacers.push(racerId);

        this.setState({selectedRacers});
    }

    render() {
        return (
            <span>
                <Row>
                <Col xs={12} md={12} lg={10} lgOffset={1}>
                    <ListGroup>
                            {
                                this.state.selectedRacers.map(racerId => {
                                    let racer = this.state.racers.find(x => x.id === racerId);
                                    return <ListGroupItem>{racer.id} - {racer.name} (<NumberFormat value={racer.cost} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}/>)</ListGroupItem>;
                                })
                            }
                        <ListGroupItem>
                            <NumberFormat
                                value={this.state.selectedRacers.reduce((cost, racerId) => cost + parseFloat(this.state.racers.find(x => x.id === racerId).cost), 0.0)}
                                decimalScale={2}
                                fixedDecimalScale={true}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                        </ListGroupItem>
                        </ListGroup>

                {!this.state.racers
                    ? <Spinner/>
                    :
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Last Year Points</th>
                            <th>Cost</th>
                            <th>Select</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.racers.map(racer => {
                            return (
                                <tr>
                                    <td>{racer.id}</td>
                                    <td><ReactCountryFlag code={racer.country_short}/> {racer.name}</td>
                                    <td>{racer.category}</td>
                                    <td>{racer.previous_year_points}</td>
                                    <td><NumberFormat value={racer.cost} decimalScale={2} fixedDecimalScale={true}
                                                      displayType={'text'} thousandSeparator={true} prefix={'$'}/>
                                    </td>
                                    <td><Checkbox onChange={() => this.toggleRacer(racer.id)}></Checkbox></td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                }
              </Col>
            </Row>
      </span>
        );
    }
}