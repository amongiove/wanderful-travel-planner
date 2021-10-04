import React from 'react';
import { connect } from 'react-redux';
import TripCard from './TripCard.js'
import Row from 'react-bootstrap/Row';

const Trips = (props) => {
    // TODO: account for if there are no trips !
    const tripCards = props.trips.map (trip => <TripCard trip={trip} key={trip.id}/>)

    return (
        <Row xs={1} md={3} className="g-4">
            {tripCards} 
        </Row>
    )
}

const mapStateToProps = state => {
    return {
        trips: state.trips
    }
}


export default connect(mapStateToProps)(Trips)