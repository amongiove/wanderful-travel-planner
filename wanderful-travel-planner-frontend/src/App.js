import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import ShowTrip from './components/ShowTrip.js';
import { connect } from "react-redux";
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import Missing from './components/Missing.js';
import { setLoggedIn } from './actions/auth.js';
import NavigationBar from './components/NavigationBar.js';
import ProtectedRoute from './components/ProtectedRoute';

class App extends React.Component {
  
  componentDidMount() {
    this.props.setLoggedIn()
  }

  render() {
    const { loggedIn, trips } = this.props

    return (
      <Router>
        {/* TODO: need this to direct at inital load but to void it after to access other pages */}
        {/* { loggedIn ? <Redirect to="/home" /> : null}*/}
        {/* { loggedIn ? null : <Redirect to="/" /> } */}
        { loggedIn? <NavigationBar /> : null }
        <Layout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <ProtectedRoute exact path="/home" component={Home}/>
            {/* <Route exact path="/trips/:tripId" component={ShowTrip} /> */}
            {/* <Protected exact path='/trips/:tripId' render={props => {
              const trip = trips.find(trip => trip.id === props.match.params.id)
              return <ShowTrip trip={trip} {...props}/>
            }}/> */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Missing} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setLoggedIn: () => dispatch(setLoggedIn())
})

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    trips: state.trips
  }
}  

export default connect(mapStateToProps, mapDispatchToProps)(App);
