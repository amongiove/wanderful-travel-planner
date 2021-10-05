import React from 'react';
// import { connect } from 'react-redux';
// import Trips from './Trips';

const ShowTrip = ({trip}) => {
    return (
        <p>{trip.attributes.name}</p>
    )


}

// const mapStateToProps = state => {
//     return {
//       trips: state.trips
//     }
// }

export default ShowTrip