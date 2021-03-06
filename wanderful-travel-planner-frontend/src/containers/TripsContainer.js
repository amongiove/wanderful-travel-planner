import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container'
import { getTrips, createNewTrip } from '../actions/trips.js';
import Trips from '../components/trips/Trips';
import NewTripForm from '../components/trips/NewTripForm.js';

class TripsContainer extends React.Component {

  componentDidMount = () => {
    this.props.getTrips()
  }
  render () {
    const { trips } = this.props
    return (
      <Container className="home">

        <div>
          <h1>Trips</h1>
          <div className="justify-content-end" style={{marginBottom: "10px"}}>
            <NewTripForm onSubmit={this.props.createNewTrip} />
          </div>
          <Trips trips={trips}/>
        </div>

      </Container>
    )
  }
}
  
const mapDispatchToProps = dispatch => ({
  getTrips: () => dispatch(getTrips()),
  createNewTrip: trip => dispatch(createNewTrip(trip))
})
  
const mapStateToProps = state => {
    return {
        trips: state.trips.trips
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsContainer)
  


