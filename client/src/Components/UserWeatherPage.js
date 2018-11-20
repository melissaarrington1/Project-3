import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import UserPage from "../Components/UserPage";
import City from "./City";
import styled from 'styled-components';
import Navigation from '../Components/Navigation'


const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: white;
`
class UserWeatherPage extends Component {
  // state = {
  //     city: '',
  //     state: '',
  //     currentTemp: ''
  // };

  state = {
    user: {},
    city: {}
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
        <h1>Welcome {this.state.user.name}</h1>
        <h1>View Your Local Weather Below:</h1>
        <h1>Select A City</h1>
        <City {...this.props} />
        {/* {this.state.city.city} */}
        {/* <button onClick={this.onDelete.bind(this)}>Delete User</button> */}
        <UserPage/>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="city"/>
          <input type="text" nanem="country" placeholder="country"/>
          <button id="Button" variant="contained" color="primary">Get Your Weather</button>
        </form>
        <Button onClick={this.handleDelete} variant="contained" color="primary">
          <Link to="/api/users/:userId">Delete Your Account</Link>
        </Button>
      </Title>
    );
  }
}

export default UserWeatherPage;
