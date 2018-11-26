import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import HomePage from './Components/HomePage'
import UserPage from './Components/UserPage'
import Navigation from './Components/Navigation'
import UserWeatherPage from './Components/UserWeatherPage';
import UpdateUser from './Components/UpdateUser'
import Weather from './Components/Weather'
import Form from './Components/Form'

const API_KEY = "4943b5b538a367546674b1c67d7fb323";
class App extends Component {
  state = {
    weather: {
    temperature: "",
    city: "",
    country: "",
    description: ""
    }
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log("data");
    
    if (city && country) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description
    })
  } else {
    this.setState({
      temperature: "",
    city: "",
    country: "",
    description: ""
    });
  }
  }
  
  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route exact path="/users" component={UserPage} />
        <Route exact path="/users/:userId" component={UserWeatherPage} getWeather={this.state.weather} />
        <Route path='/users/:userId' component={UpdateUser} />
        <Route path="/" component={HomePage}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
