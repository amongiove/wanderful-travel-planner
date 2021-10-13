import React from 'react';
import TripCard from './TripCard.js';
import Row from 'react-bootstrap/Row';

const Trips = (props) => {
    // TODO: account for if there are no trips !
    const tripCards = props.trips.map (trip =><TripCard trip={trip} key={trip.id} id={trip.id}/>)

    return (
        <div>
        <Row xs={1} md={3} className="g-4">
            {tripCards} 
        </Row>
        </div>
    )
}

export default Trips