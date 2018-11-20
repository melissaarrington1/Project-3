import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

class City extends Component {
    state = {
        user: {},
        city: []
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;
        axios.get(`/api/users/${userId}/city`).then(res => {
          this.setState({
    
            city: res.data
          });
        });
      }

    render() {
        return (
            <div>
                {this.state.city.map(city => (
          <div key={user._id}>
          <Link to={`/users/${user._id}`}>{user.name}</Link>
          </div>
        ))}
                {this.state.city.name}
            </div>
        );
    }
}

export default City;