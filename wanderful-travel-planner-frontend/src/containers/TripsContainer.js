import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container'
import { getTrips, createNewTrip } from '../actions/trips.js';
import Trips from '../components/Trips';
import TripForm from '../components/TripForm.js'
import Row from 'react-bootstrap/Row';


class TripsContainer extends React.Component {

  componentDidMount = () => {
    this.props.getTrips()
  }
    
  render () {
    const { trips } = this.props
    return (
      <Container className="home">

        <div>
        {/* TODO: do i want to have users name here? if so need to add current user to state to get the name attribute */}
          <h1>Trips</h1>
          <Row xs={1} md={-1} className="justify-content-end" style={{padding: "10px"}}>
            <TripForm onSubmit={this.props.createNewTrip} />
          </Row>
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
  


