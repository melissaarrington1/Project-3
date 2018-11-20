import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'
import styled from 'styled-components';



const Title = styled.div`
  
  font-size: 1.5em;
  text-align: center;
  color: white;

`
class UserPage extends Component {
  state = {
    user: [],
    newUser: {
      name: "",
      email: ""
    }
  };

  getAllUsers = () => {
    axios.get("/api/users").then(res => {
      this.setState({ user: res.data });
    });
  };

  componentDidMount() {
    this.getAllUsers();
  }

  handleChange = event => {
    const newUser = { ...this.state.newUser };
    newUser[event.target.name] = event.target.value;
    this.setState({ newUser: newUser });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios.post("/api/users", this.state.newUser).then(res => {
      this.props.history.push(`/users/${res.data._id}`);
    });
  };

  render() {
    return (
      <div>
        { /* This shows a list of All Users */ }
        {this.state.user.map(user => (
          <div key={user._id}>
          <Link to={`/users/${user._id}`}>{user.name}</Link>
          </div>
        ))}

        <h1>New User Page</h1>
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
            Create User
          </Button>
        </form>
      </div>
    );
  }
}

export default UserPage;
