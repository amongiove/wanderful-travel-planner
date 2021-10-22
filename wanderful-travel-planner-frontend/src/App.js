import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import { connect } from "react-redux";
import TripsContainer from './containers/TripsContainer';
import Missing from './components/Missing.js';
import { setLoggedIn } from './actions/auth.js';
import NavigationBar from './components/NavigationBar.js';
import ProtectedRoute from './ProtectedRoute.js';
import TripContainer from './containers/TripContainer.js';

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
        { loggedIn? <NavigationBar /> : null }
          <Switch>
            <Route exact path="/" >
              <Redirect to="/login" />
            </Route>

            <ProtectedRoute exact path="/trips" component={TripsContainer} />
            <ProtectedRoute path="/trips/:tripId" component={TripContainer} />
             
            <Route path="/login" component={Login} >
              { loggedIn? <Redirect to="/trips" /> : null }
            </Route>
            <Route path="/signup" component={Signup}> 
              { loggedIn? <Redirect to="/trips" /> : null }
            </Route>
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
