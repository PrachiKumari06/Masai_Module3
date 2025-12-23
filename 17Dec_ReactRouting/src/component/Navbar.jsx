import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={navbarStyle}>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/todo" style={linkStyle}>TodoCard</Link>
      </nav>
    </div>
  );
}
const navbarStyle = {
  margin: "10px",
  textAlign: "center",
  backgroundColor: "purple",
  color: "white",
  borderRadius: "10px",
  padding: "10px"
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 15px",
  fontWeight: "bold"
};
