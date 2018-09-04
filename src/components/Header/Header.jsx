import React, {Component} from 'react';
import './Header.css';
import {Nav, Navbar, NavItem} from "react-bootstrap";

export class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Fantasy Cyclocross</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={2} href="/results/points">
                            Results
                        </NavItem>
                        <NavItem eventKey={2} href="/teams">
                            Teams
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
            ;
    }
}