import React from 'react';
import TripCard from './TripCard.js';
import Row from 'react-bootstrap/Row';

const Trips = (props) => {
    const tripCards = props.trips.map (trip =><TripCard trip={trip} key={trip.id} id={trip.id}/>)

    return (
        props.trips.length === 0 ? 
            <h3>No upcoming trips. Add one now!</h3> 
        :
            <Row xs={1} md={3} className="g-4">
                {tripCards} 
            </Row>
    )
}

export default Trips