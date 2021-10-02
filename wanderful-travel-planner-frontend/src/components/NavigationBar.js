import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Logout from './Logout.js'

const Styles = styled.div`
    .navbar {
        background-color: #E6E6FA;
    }

    a, .navbar-brand, .navbar-nav .nav-link {
        color: #708090;

        &:hover {
            color: #000000;
        }
    }
`;

const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Wanderful Travel Planner </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }} > 
                    <Nav.Item >
                        <Logout />
                        {/* TODO: make this more appealing? */}
                        {/* <Nav.Link>
                            <Link to="/logout">Logout (fix this)</Link>
                        </Nav.Link> */}
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

export default NavigationBar;