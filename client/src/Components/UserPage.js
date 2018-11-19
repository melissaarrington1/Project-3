import React, { Component } from "react";
import axios from "axios";

class UserPage extends Component {
  state = {
    newUser: {
      name: "",
      email: ""
    }
  };

  handleChange = event => {
    const newUser = { ...this.state.newUser };
    newUser[event.target.name] = event.target.value;
    this.setState({ newUser: newUser });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/users", this.state.newUser).then(res => {
      this.props.history.push(`/users/${res.data._id}`);
    });
  };

  render() {
    return (
      <div>
        <h1>New User Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.newUser.name}
            onChange={this.handleChange}
          />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={this.state.newUser.email}
            onChange={this.handleChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UserPage;
