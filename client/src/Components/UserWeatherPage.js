import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import City from "./City";
import styled from 'styled-components';
import Navigation from '../Components/Navigation'


const Title = styled.div`
  font-size: 20px;
  text-align: center;
  color: white;
`
class UserWeatherPage extends Component {
    
    state = {
      user: [],
      newUser: {
        name: "",
        email: "",
        city: ""
      }
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
      console.log(res.data)
      this.setState({ user: res.data })
    })
  }

  handleChange = event => {
    const updatedUser = { ...this.state.newUser }

    updatedUser[event.target.name] = event.target.value
    this.setState({ newUser: updatedUser })
  }

  handleSubmit = event => {
    event.preventDefault();

    const userId = this.props.match.params.userId
    axios.patch(`/api/users/${userId}`, this.state.newUser)
    .then(res => {
      this.props.history.push(`/users/${res.data._id}`)
    })
  }

  handleDelete = () => {
    axios.delete(`/api/users/${this.props.match.params.userId}`).then(res => {
      this.props.history.push("/users");
    });
  };


  render() {
    return (
      <Title>
          <Navigation />
          {console.log(this.state.user)}
        <h1>Welcome {this.state.user.name}</h1>
        <h1>View Your Local Weather Below:</h1>
        <h1>Your Current Selected City Is: {this.state.user.city} </h1>
        
        <City match={this.props.match}/>
        <img id="image" src="https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2f/35/atlanta.jpg" alt="atlanta" />
        
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name?"
            value={this.state.newUser.name}
            onChange={this.handleChange}
          />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            placeholder="Email?"
            value={this.state.newUser.email}
            onChange={this.handleChange}
          />
          <label>Favorite City: </label>
          <input
            type="text"
            name="city"
            placeholder="Favorite City?"
            value={this.state.newUser.favCity}
            onChange={this.handleChange}
          />

          <Button
            type="submit"
            value="Submit"
            variant="contained"
            color="primary"
          >
            Update User
          </Button>
        </form>
        
        <Button onClick={this.handleDelete} variant="contained" color="primary">
          <Link to="/api/users/:userId">Delete Your Account</Link>
        </Button>

        
      </Title>
    );
  }
}

export default UserWeatherPage;
