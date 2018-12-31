import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import weatherPic from "../Images/weatherGIF.gif";

const Title = styled.div`
height: 1000px;
  font-size: 1.5em;
  text-align: center;
  color: white;
//background-image: url(${weatherPic});
//background-repeat: no-repeat;
  
`;

class HomePage extends Component {
  render() {
    return (
      <Title>
        <h1>Welcome To Your Weather App</h1>
        <Button variant="contained" color="primary">
          {" "}
          <Link to="/users">Click Here to Enter</Link>
        </Button>
      </Title>
    );
  }
}

export default HomePage;
