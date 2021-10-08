import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { showTrip } from '../actions/trips';
import { connect } from 'react-redux';
import  Container  from 'react-bootstrap/Container';

const ShowTrip = ({showTrip}) => {
    const {tripId} = useParams();
    const [trip, setTrip] = useState(0);

    //TODO: set timeout to help unmounted component error
        useEffect(() => {
          async function fetchData() {
            const response = await showTrip(tripId)
            setTrip(response);
          }
          fetchData();
        }, [showTrip, tripId]);

   
    if (trip) {
    return (

        <Container>
            <p>This is trip ID: {tripId}</p> 
            <p>{trip.attributes.name}</p>

        </Container>
    )
    } else {
        return "no data";
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showTrip: tripId => dispatch(showTrip(tripId))
    }
}

export default connect(null, mapDispatchToProps)(ShowTrip);