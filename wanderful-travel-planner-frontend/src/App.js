import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import { connect } from "react-redux";
import TripsContainer from './containers/TripsContainer';
import Missing from './components/Missing.js';
import { setLoggedIn } from './actions/auth.js';
import NavigationBar from './components/NavigationBar.js';
import ProtectedRoute from './ProtectedRoute.js';
import ShowTripContainer from './containers/ShowTripContainer.js';

class App extends React.Component {
  
  componentDidMount() {
    this.props.setLoggedIn()
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

            <ProtectedRoute exact path="/trips" component={TripsContainer} />
            <ProtectedRoute path="/trips/:tripId" component={ShowTripContainer} />
             
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
})

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
  }
}  

export default connect(mapStateToProps, mapDispatchToProps)(App);
