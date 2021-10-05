import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
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
    const { loggedIn } = this.props
    return (
      <Router>
        { loggedIn ? <Redirect to="/home" /> : null}
        { loggedIn? <NavigationBar /> : null }
        <Layout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/home" render={(props) => loggedIn? <Home {...props}/> : <Redirect to="/"/>}/>
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
