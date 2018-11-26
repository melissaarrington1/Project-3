import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import UserPage from "../Components/UserPage";
import City from "./City";
import styled from 'styled-components';
import Navigation from '../Components/Navigation'
import Weather from './Weather'


const Title = styled.div`
  font-size: 20px;
  text-align: center;
  color: white;
`
class UserWeatherPage extends Component {
    handleWeather = (e) => {
        e.preventDefault()
        console.log(this.props.getWeather)
    }
  // state = {
  //     city: '',
  //     state: '',
  //     currentTemp: ''
  // };

  state = {
    user: {},
    city: {}
  };

  getAllCites = () => {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`).then(res => {
      this.setState({ user: res.data });
    });
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`).then(res => {
      this.setState({
        user: res.data,
        city: res.data.city
      });
    });
  }

  handleDelete = () => {
    axios.delete(`/api/users/${this.props.match.params.userId}`).then(res => {
      this.props.history.push("/users");
    });
  };

  // onDelete() {
  //     let userId = this.state.userId;
  //     axios.delete(`http://localhost:3000/api/users/${userId}`)
  //       .then(response => {
  //         this.props.history.push("/");
  //       })
  //       .catch(err => console.log(err));
  //   }




  render() {
    return (
      <Title>
          <Navigation />
          {console.log(this.state.user)}
        <h1>Welcome {this.state.user.name}</h1>
        <h1>View Your Local Weather Below:</h1>
        <h1>Select A City </h1>
        {/* <City {...this.props} /> */}
        {/* {this.state.city.city} */}
        {/* <button onClick={this.onDelete.bind(this)}>Delete User</button> */}
        <City match={this.props.match}/>
        <img id="image" src="https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2f/35/atlanta.jpg" alt="atlanta" />
        <Weather 
        temperature={this.state.temperature} 
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        
        />
        
        <form onSubmit={(e) => this.handleWeather(e)}>
        {console.log(this.props.getWeather)}
          <input type="text" name="city" placeholder="city"/>
          <input type="text" nanem="country" placeholder="country"/>
          <Button type="submit" variant="contained" color="primary">Get Your Weather</Button>
        </form>
        
        <Button onClick={this.handleDelete} variant="contained" color="primary">
          <Link to="/api/users/:userId">Delete Your Account</Link>
        </Button>

        
      </Title>
    );
  }
}

export default UserWeatherPage;
