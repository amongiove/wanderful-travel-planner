import './App.css';
import Login from "./components/Login.js"
import { connect } from "react-redux"
import { getCurrentUser} from "./actions/currentUser.js"
import React from 'react';

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Login />
    );
  }
  
}

export default connect(null, { getCurrentUser })(App);
