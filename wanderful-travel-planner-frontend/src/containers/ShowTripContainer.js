import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { showTrip, editTrip, deleteTrip } from '../actions/trips.js';
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItineraryContainer from './ItineraryContainer.js';
import TripInfo from '../components/trips/TripInfo.js';

const Styles = styled.div`
    .sidebar {
        background-color: #708090;
        height: 100vh;
        display: flex;
        flex-direction: column;        
    }

    .sidebar a:hover {
        background-color: #E6E6FA ;
        opacity: .5;
    }

    .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
        color: #000000;
        background-color: #E6E6FA;
        opacity: .75;
    }

    .nav-link{
        color: #E6E6FA ;

        &:hover {
            color: #000000;
        }
    }

`;


const ShowTripContainer = ({showTrip, editTrip, deleteTrip}) => {
    const {tripId} = useParams();
    const [trip, setTrip] = useState(0);
    
    //TODO: set timeout to help unmounted component error
        useEffect(() => {
          async function fetchData() {
            const response = await showTrip(tripId)
            setTrip(response)
          }
          fetchData();
        }, [showTrip, tripId]);

   
    if (trip) {
    return (
        <Tab.Container defaultActiveKey="first">
            <Row>
                <Col sm={2} >
                    <Styles>
                    <Nav variant="pills" className="justify-content-start sidebar">
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
                    </Styles>
                </Col>
                <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <TripInfo trip={trip} onEditSubmit={editTrip} onDelete={deleteTrip}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <ItineraryContainer trip={trip}/>
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
        showTrip: tripId => dispatch(showTrip(tripId)),
        editTrip: trip => dispatch(editTrip(trip)),
        deleteTrip: tripId => dispatch(deleteTrip(tripId))
    }
}

export default connect(null, mapDispatchToProps)(ShowTripContainer); 