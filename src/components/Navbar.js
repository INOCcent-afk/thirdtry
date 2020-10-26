import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
  const link = {
    color: "#141414",
    textDecoration: "none",
  };
  return (
    <>
      <header>
        <div className="logo">
          <p>AQUARIUM ZEN</p>
        </div>
        <div className="links">
          <Link style={link} to="/">
            <li>AQUARIUM ZEN</li>
          </Link>
          <Link style={link} to="/product">
            <li>PRODUCTS</li>
          </Link>
          <Link style={link} to="/services">
            <li>SERVICES</li>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
