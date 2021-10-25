import React, { useEffect } from 'react';
// import Moment from 'moment';
// import { extendMoment } from 'moment-range';
// import DayCard from '../components/itinerary/DayCard.js';
// import { getEvents } from '../actions/events.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import NewEventForm from '../components/itinerary/NewEventForm.js';
import styled from 'styled-components';
// import { createNewEvent } from '../actions/events.js';
// import { connect } from 'react-redux';

const Styles = styled.div`
    .itinerary-container {
        margin: 20px;
        padding: 10px;
    }

    .new-event {
        text-align: right;
    }

`;

const FlightsContainer = () => {


    // useEffect(() => {
    //     async function fetchData() {
    //         await getEvents();
    //     }
    //     fetchData();
    // }, [getEvents]);

    // const tripEvents = events.filter(event => trip.id === event.relationships.trip.data.id )
    // //TODO: this is causing issues on reload after new event creation (relationships undefined error?)

    // const daysArray = Array.from(range.by('day'));      
    // const dayCards = daysArray.map(day => <DayCard tripEvents={tripEvents} dayNum={daysArray.indexOf(day) +1 } day={day.format('MM-DD-YYYY')} key={day} id={day} />) 


    return ( 
        <Styles>
            <div className="flights-container">
                <Row> 
                    <Col>
                        <h2>Flights</h2>
                    </Col>
                    <Col className="new-flight">
                        new flight form
                        {/* <NewEventForm  currentTrip={trip} onSubmit={createNewEvent} /> */}
                    </Col>
                </Row>
                
                <Col>
                    <Row xs={1} className="g-4">
                        flight cards
                    </Row>
                </Col>
            </div>
        </Styles>
    );
};

// const mapStateToProps = state => {
//     return {
//         events: state.events.events,
//         trip: state.trips.trip
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         getEvents: (tripId) => dispatch(getEvents(tripId)),
//         createNewEvent: newEvent => dispatch(createNewEvent(newEvent))
//     }
// }

export default (FlightsContainer); 
