import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { showTrip } from '../actions/trips';
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ShowTrip = ({showTrip}) => {
    const {tripId} = useParams();
    const [trip, setTrip] = useState(0);

    //TODO: set timeout to help unmounted component error
        useEffect(() => {
          async function fetchData() {
            const response = await showTrip(tripId)
            setTrip(response);
          }
          fetchData();
        }, [showTrip, tripId]);

   
    if (trip) {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Trip Info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Itinerary</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Packing List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="fourth">Other</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                    <Tab.Pane eventKey="first">
                        Trip Info componet
                        <p>This is trip ID: {tripId}</p> 
                        <p>{trip.attributes.name}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        Itinerary component
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        Packing List component
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                        Other component
                    </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
    } else {
        return "no data";
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showTrip: tripId => dispatch(showTrip(tripId))
    }
}

export default connect(null, mapDispatchToProps)(ShowTrip);