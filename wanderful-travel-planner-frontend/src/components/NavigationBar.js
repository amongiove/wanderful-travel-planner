import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logout from './Logout.js'

const Styles = styled.div`
    .navbar {
        background-color: #708090;
        padding: 10px;
    }

    a, .navbar-brand, .navbar-nav .nav-link {
        color: white;

        &:hover {
            color: #000000;
        }
    }
`;

const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/trips">Wanderful Travel Planner </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }} > 
                    <Nav.Item >
                        <Logout />
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

export default NavigationBar;