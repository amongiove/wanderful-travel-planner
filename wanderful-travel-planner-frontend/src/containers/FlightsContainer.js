import React, { useEffect } from 'react';
import { getFlights } from '../actions/flights.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import styled from 'styled-components';
import FlightInfo from '../components/flights/FlightInfo.js';
import { connect } from 'react-redux';
import { GrFormAdd } from 'react-icons/gr';

const Styles = styled.div`
    .new-flight {
        float: right;
    }

`;

const FlightsContainer = ({trip}) => {

    // useEffect(() => {
    //     async function fetchData() {
    //         await getFlights();
    //     }
    //     fetchData();
    // }, [getFlights]);

    const tripFlights = trip.attributes.flights.filter(flight => (parseInt(flight.user_id) === parseInt(localStorage['userId'])))
    let orderedFlights = tripFlights.sort((a,b) => a.date_time > b.date_time ? 1 : -1)
    const flights = orderedFlights.map (flight => <FlightInfo flight={flight} key={flight.id} id={flight.id} /> )

    console.log('flights', flights)


    return ( 
        <Styles>
        <Card className="text-center">
            <Card.Body>
                <Card.Title>Flights</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{trip.attributes.name}</Card.Subtitle>
                <Card.Text>
                    <ListGroup >
                        {tripFlights.length > 0 ? flights : null}
                        {/* TODO: no flights msg */}
                    </ListGroup>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button className="new-flight" variant="outline-secondary" style={{marginLeft: "10px"}}>
                    <GrFormAdd/> New Flight
                </Button>
            </Card.Footer>
        </Card>
        </Styles>
    );
};


// const mapDispatchToProps = dispatch => {
//     return {
//         getFlights: () => dispatch(getFlights()),
//     }
// }

export default connect(null, null)(FlightsContainer); 

