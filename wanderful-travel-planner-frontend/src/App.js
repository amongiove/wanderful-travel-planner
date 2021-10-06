import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import { connect } from "react-redux";
import Home from './components/Home.js';
// import Trips from './components/Trips.js';
import TripsContainer from './containers/TripsContainer';
import Missing from './components/Missing.js';
import { setLoggedIn } from './actions/auth.js';
import NavigationBar from './components/NavigationBar.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import ShowTrip from './components/ShowTrip.js';
import { getTrips } from './actions/trips.js'

class App extends React.Component {
  
  componentDidMount() {
    this.props.setLoggedIn()
    // this.props.getTrips()
  }

  render() {
    const { loggedIn } = this.props

    return (
      <Router>
        {/* TODO: need this to direct at inital load but to void it after to access other pages */}
        {/* { loggedIn ? <Redirect to="/home" /> : null}*/}
        {/* { loggedIn ? null : <Redirect to="/" /> } */}
        { loggedIn? <NavigationBar /> : null }
          <Switch>
            <Route exact path="/" component={Welcome} />

            {/* TODO: merge route with trips to simplify */}
            {/* <ProtectedRoute path="/home" component={Home}/> */}

            <ProtectedRoute exact path="/trips" component={TripsContainer} />
            <ProtectedRoute path="/trips/:tripId" component={ShowTrip} />
             
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Missing} />
          </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setLoggedIn: () => dispatch(setLoggedIn()),
  getTrips: () => dispatch(getTrips())
})

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
  }
}  

export default connect(mapStateToProps, mapDispatchToProps)(App);
