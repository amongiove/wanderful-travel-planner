import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { showTrip } from '../actions/trips';
import { connect } from 'react-redux';

const ShowTrip = ({showTrip}) => {
    const {tripId} = useParams();
    const [trip, setTrip] = useState(0);

        useEffect(() => {
          async function fetchData() {
            const response = await showTrip(tripId)
            console.log(response)
            setTrip(response);
          }
          fetchData();
        }, [showTrip, tripId]);
            
        //   setTrip(result);
        // }; })
    // let {tripId} = useParams();
    // let trip = trips.find(trip => trip.id === tripId)
    // console.log(trip)
   
    if (trip) {
    return (

        <div>
        <p>This is trip ID: {tripId}</p> 
        <p>{trip.attributes.name}</p>
        </div>
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

const mapStateToProps = state => {
    return {
        myTrip: state.trip
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowTrip);