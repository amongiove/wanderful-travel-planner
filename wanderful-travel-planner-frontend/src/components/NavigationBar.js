import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logout from './Logout.js';

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
            <Navbar.Brand href="/">Wanderful Travel Planner</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Item>
                    <Nav.Link>
                    {/* <Link to="/">Home</Link> */}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                    {/* <Link to="/about">About</Link> */}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item align="right">
                    Logout Button (move this right)
                </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)


export default NavigationBar