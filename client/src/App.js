import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import HomePage from './Components/HomePage'
import UserPage from './Components/UserPage'
import Navigation from './Components/Navigation'
import UserWeatherPage from './Components/UserWeatherPage';



class App extends Component {
  
  render() {
    return (
      <Router>
      <div>
        <Navigation />
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/api/users" component={UserPage}/>
        <Route exact path="/api/users/:userId" component={UserWeatherPage}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
