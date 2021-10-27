import React from 'react';
import { getFlights, deleteFlight, createNewFlight, editFlight } from '../actions/flights.js';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import styled from 'styled-components';
import FlightInfo from '../components/flights/FlightInfo.js';
import { connect } from 'react-redux';
import NewFlightForm from '../components/flights/NewFlightForm.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Styles = styled.div`
    .flights-container {
        margin: 20px;
        padding: 10px;
    }

    .list {
        margin: 40px;
    }

    .new-flight {
        text-align: right;
        margin-right: 20px;
    }

`;

class FlightsContainer extends React.Component {

    componentDidMount = () => {
        this.props.getFlights()
    }
        
    render () {
        const { flights, trip, deleteFlight, createNewFlight, editFlight } = this.props

        const matchedFlights = flights.filter(flight => (parseInt(flight.attributes.trip_id) === parseInt(trip.id)))
        let orderedFlights = matchedFlights.sort((a,b) => a.attributes.date_time > b.attributes.date_time ? 1 : -1)
        const tripFlights = orderedFlights.map (flight => <FlightInfo flight={flight} key={flight.id} id={flight.id} onDelete={deleteFlight} trip={trip} onEdit={editFlight} /> )

        return ( 
            <Styles>
                <Container className="flights-container"> 
                    <Row> 
                        <Col>
                            <h2>Flights</h2>
                        </Col>
                        <Col className="new-flight">
                            <NewFlightForm onSubmit={createNewFlight} currentTrip={trip} />
                        </Col>
                    </Row>
                        <ListGroup className="list" >
                            {matchedFlights.length > 0 ? tripFlights : null}
                            {/* TODO: no flights msg */}
                        </ListGroup>   
                </Container>
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
        deleteFlight: flightId => dispatch(deleteFlight(flightId)),
        createNewFlight: newFlight => dispatch(createNewFlight(newFlight)),
        editFlight: updatedFlight => dispatch(editFlight(updatedFlight))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightsContainer); 

