import React, { Component } from "react";

class Weather extends Component {
  state = {
    city: {},
    state: []
  };

  render() {
    return (
      <div>
        temperature={this.props.temperature}
        city={this.props.city}
        country={this.props.country}
        description={this.props.description}
      </div>
    );
  }
}

export default Weather;
