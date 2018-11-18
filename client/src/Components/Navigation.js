import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
  <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/api/users">User</NavLink>
      </div>
  );
};

export default Navigation;
