import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container'
import { getTrips } from '../actions/trips.js';
import Trips from '../components/Trips';

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
            <Trips trips={trips}/>
          </div>

        </Container>
    )
  }
}
  
const mapDispatchToProps = dispatch => ({
  getTrips: () => dispatch(getTrips()),
})
  
const mapStateToProps = state => {
    return {
        trips: state.trips
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsContainer)
  


