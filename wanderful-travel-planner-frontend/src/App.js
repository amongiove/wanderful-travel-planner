import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from "./components/Login.js"
import Logout from "./components/Logout.js"
import { connect } from "react-redux"
import Layout from './components/Layout.js'
import Home from './components/Home.js'
import Missing from './components/Missing.js'
import { getCurrentUser} from "./actions/currentUser.js"


class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    { this.props.currentUser != null? <Redirect to="/" /> : <Redirect to="/login" /> }
    return (
      <Router>
        <Layout currentUser ={this.props.currentUser}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            {/* change to signup - logout will just be button */}
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
