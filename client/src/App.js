import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <h1>Hello from HomePage</h1>
      </div>
      </Router>
    );
  }
}

export default App;
