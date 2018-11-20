import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
  <div>
      <p><NavLink to="/">Home</NavLink></p>
      <p><NavLink to="/users">User</NavLink></p>
      </div>
  );
};

export default Navigation;
