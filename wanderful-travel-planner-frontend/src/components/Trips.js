import React from 'react';
import { connect } from 'react-redux';

const Trips = () => {
    return ( "Trips")
}

const mapStateToProps = state => {
    return {
        trips: state.trips
    }
}


export default connect(mapStateToProps)(Trips)