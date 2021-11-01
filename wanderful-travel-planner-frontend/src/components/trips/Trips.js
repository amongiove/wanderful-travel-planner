import React from 'react';
import TripCard from './TripCard.js';
import Row from 'react-bootstrap/Row';

const Trips = (props) => {
    const tripCards = props.trips.map (trip =><TripCard trip={trip} key={trip.id} id={trip.id}/>)

    return (
        tripCards.length !== 0 ? 
            <Row xs={1} md={3} className="g-4">
                {tripCards} 
            </Row>
        :
            <h3>No upcoming trips. Add one now!</h3> 
            //this pops up as loadin... is there a way to delay?
    )
}

export default Trips