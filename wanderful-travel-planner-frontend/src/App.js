import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './components/Welcome.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import ShowTrip from './components/ShowTrip.js';
import { connect } from "react-redux";
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import Missing from './components/Missing.js';
import { getCurrentUser} from './actions/currentUser.js';
import NavigationBar from './components/NavigationBar.js';


class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <Router>
        {/* TODO: need this to direct at inital load but to void it after to access other pages */}
        { loggedIn ? <Redirect to="/home" /> : null}
        { loggedIn? <NavigationBar /> : null }
        <Layout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/home" render={(props) => loggedIn? <Home {...props}/> : <Redirect to="/"/>}/>
            <Route exact path="/trips/:tripId" component={ShowTrip} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Missing} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  }
}  

export default connect(mapStateToProps, { getCurrentUser })(App);
