import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        
        <Switch>
        <Route exact path="/" component={HomePage}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
