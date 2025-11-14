import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  margin: "0 10px",
  textDecoration: "none",
  color: isActive ? "#0b76ef" : "#333",
  fontWeight: isActive ? "600" : "400"
});

export default function Navbar(){
  return (
    <header style={{padding:16, borderBottom:"1px solid #eee"}}>
      <nav>
        <NavLink to="/" style={linkStyle} end>Home</NavLink>
        <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </nav>
    </header>
  );
}
