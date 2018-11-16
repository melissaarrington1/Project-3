import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import UserPage from './Components/UserPage'



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/users" component={UserPage}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
