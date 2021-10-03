import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Welcome from "./components/Welcome.js"
import Login from "./components/Login.js"
import Signup from "./components/Signup.js"
import { connect } from "react-redux"
import Layout from './components/Layout.js'
import Home from './components/Home.js'
import Missing from './components/Missing.js'
import { getCurrentUser} from "./actions/currentUser.js"
import NavigationBar from './components/NavigationBar.js';


class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Router>
        {/* TODO: edit this so people cant type in own link to get to other page */}
        { this.props.currentUser? <Redirect to="/home" /> : null}
        {/* { this.props.currentUser? <Home /> : <Welcome />} */}
        {this.props.currentUser != null? <NavigationBar /> : null }
        <Layout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Missing} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}  

export default connect(mapStateToProps, { getCurrentUser })(App);
