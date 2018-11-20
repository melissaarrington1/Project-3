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
          <div key={city._id}>
          <Link to={`/users/${city._id}`}>{city.city}</Link>
          </div>
        ))}
                {/* {this.state.city.city} */}
            </div>
        );
    }
}

export default City;