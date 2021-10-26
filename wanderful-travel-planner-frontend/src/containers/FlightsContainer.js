import React from 'react';
import { getFlights, deleteFlight } from '../actions/flights.js';
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

class FlightsContainer extends React.Component {

    componentDidMount = () => {
        this.props.getFlights()
    }
        
    render () {
        const { flights, trip, deleteFlight } = this.props

        const matchedFlights = flights.filter(flight => (parseInt(flight.attributes.trip_id) === parseInt(trip.id)))
        let orderedFlights = matchedFlights.sort((a,b) => a.attributes.date_time > b.attributes.date_time ? 1 : -1)
        const tripFlights = orderedFlights.map (flight => <FlightInfo flight={flight} key={flight.id} id={flight.id} onDelete={deleteFlight}/> )

        return ( 
            <Styles>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Flights</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{trip.attributes.name}</Card.Subtitle>
                        <Card.Text>
                            <ListGroup >
                                {matchedFlights.length > 0 ? tripFlights : null}
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
    }
};

const mapStateToProps = state => {
    return {
        flights: state.flights.flights
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getFlights: () => dispatch(getFlights()),
        deleteFlight: flightId => dispatch(deleteFlight(flightId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightsContainer); 

