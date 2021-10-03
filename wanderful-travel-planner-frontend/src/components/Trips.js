import React from 'react';
import { connect } from 'react-redux';
import TripCard from './TripCard.js'

const Trips = (props) => {
    // TODO: account for if there are no trips !
    const tripCards = props.trips.map (trip => <TripCard trip={trip} key={trip.id}/>)

    return (
        tripCards
    )
}

const mapStateToProps = state => {
    return {
        trips: state.trips
    }
}


export default connect(mapStateToProps)(Trips)