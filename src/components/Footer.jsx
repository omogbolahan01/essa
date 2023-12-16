import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <footer>
      <div className="footer-firs">
        <div className="firss">
          <h3>Get started with Essa</h3>
          <p>
            We provide the ultimate SaaS platform to help you manage, grow and
            optimize your online store
          </p>
          <div className="try-button">
            <button className="one">Try for free</button>
            <button className="two">Contact sales</button>
          </div>
        </div>
      </div>
      <div className="footer-lol">
        <div className="footer-first">
          <div className="footer-left">
            <div>
              <img src="/images/Frame 6326 (2).png" />
            </div>
            <div className="socials">
              <Link>
                <img src="/images/Vector (5).png" className="social-t" />
              </Link>
              <Link>
                <img src="/images/Vector (6).png " className="social-i" />
              </Link>
              <Link>
                <img src="/images/linkedin-box-fill.png" className="linkedin" />
              </Link>
            </div>
          </div>
          <div className="nav-bottom">
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
            <NavLink
              to="api"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Api Documentation
            </NavLink>
          </div>
        </div>
        <div className="empty"></div>
        <div className="footer-lll">
          <p>(c) Essa technologies 2023</p>
        </div>
      </div>
    </footer>
  );
}
