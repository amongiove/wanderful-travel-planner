import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import { Link } from 'react-router-dom';


const TripInfo = ({trip}) => {

    return (
        <p>{trip.attributes.name}</p>
    )
}



export default TripInfo;

