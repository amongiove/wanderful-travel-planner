import React from 'react';

const TripCard = ({trip}) => {
    return (
        <p>{trip.attributes.location}</p>
    )
}


export default TripCard