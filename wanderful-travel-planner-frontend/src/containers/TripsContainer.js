import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { getTrips } from '../actions/trips.js'

class TripsContainer extends React.Component {

  componentDidMount = () => {
    this.props.getTrips()
  }
    
  render () {
    return (
        // 
        <p>trips container</p>
    )
  }
}
  
const mapDispatchToProps = dispatch => ({
  getTrips: () => dispatch(getTrips())
})
  
const mapStateToProps = state => {
    return {
        trips: state.trips
    }
}

//   const mapDispatchToProps = dispatch => ({
//     fetchGroups: () => dispatch(fetchGroups()),
//     fetchGroup: groupId => dispatch(fetchGroup(groupId)),
//     fetchComments: () => dispatch(fetchComments()),
//     createNewGroup: group => dispatch(createNewGroup(group)),
//     createNewComment: (id, comment) => dispatch(createNewComment(id, comment)),
//     onEdit: group => dispatch(editGroup(group)),
//     onDelete: groupId => dispatch(deleteGroup(groupId))
//   })
  
export default connect(mapStateToProps, mapDispatchToProps)(TripsContainer)
  


