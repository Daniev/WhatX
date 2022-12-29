import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header">
      <h2>WhatX</h2>
      <nav>
        <Link to="/">
          <button className="HeaderNavButton">Home</button>
        </Link>
        <Link to="/View">
          <button className="HeaderNavButton">View</button>
        </Link>
      </nav>
    </div>
  );
};
