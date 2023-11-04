import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <div className="site-logo">
        <img src="/images/Frame 6326.png" />
      </div>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Features
        </NavLink>
        <NavLink
          to="pricing"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About Us
        </NavLink>
        <NavLink
          to="partnership"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Partnership
        </NavLink>
        <NavLink
          to="contact"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Contact Us
        </NavLink>
      </nav>
      <NavLink
        to="api"
        style={({ isActive }) => (isActive ? activeStyles : null)}
        className="api-nav"
      >
        Api Documentation
      </NavLink>
    </header>
  );
}
