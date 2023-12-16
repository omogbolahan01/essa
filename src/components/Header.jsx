// Header component

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="site-logo">
        <img src="/images/Frame 6326.png" alt="Site Logo" />
      </div>
      <nav>
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`nav-items ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
          >
            Features
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
          >
            Pricing
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
          >
            About Us
          </NavLink>
          <NavLink
            to="partnership"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
          >
            Partnership
          </NavLink>
          <NavLink
            to="contact"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>

          <NavLink
            to="api"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            className="api-nav"
            onClick={closeMenu}
          >
            Api Documentation{" "}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Header() {
//   const activeStyles = {
//     fontWeight: "bold",
//     textDecoration: "underline",
//     color: "#161616",
//   };
//   const [menuOpen, setMenuOpen] = useState(false);
//   const closeMenu = () => {
//     setMenuOpen(false);
//   };
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   return (
//     <header>
//       <div className="site-logo">
//         <img src="/images/Frame 6326.png" />
//       </div>
//       <nav>
//         <div
//           className={`menu-toggle ${menuOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//         >
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//         <div className={`nav-items ${menuOpen ? "open" : ""}`}>
//           <NavLink
//             to="."
//             style={({ isActive }) => (isActive ? activeStyles : null)}
//             onClick={closeMenu}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="about"
//             style={({ isActive }) => (isActive ? activeStyles : null)}
//             onClick={closeMenu}
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="how"
//             style={({ isActive }) => (isActive ? activeStyles : null)}
//             onClick={closeMenu}
//           >
//             How to uwego
//           </NavLink>
//           <NavLink
//             to="contact"
//             style={({ isActive }) => (isActive ? activeStyles : null)}
//             onClick={closeMenu}
//           >
//             Contact Us
//           </NavLink>
//           <NavLink
//             to="faqs"
//             style={({ isActive }) => (isActive ? activeStyles : null)}
//             onClick={closeMenu}
//           >
//             FAQs
//           </NavLink>
//         </div>
//       </nav>
//       {/* <NavLink
//           to="/"
//           style={({ isActive }) => (isActive ? activeStyles : null)}
//         >
//           Features
//         </NavLink>
//         <NavLink
//           to="pricing"
//           style={({ isActive }) => (isActive ? activeStyles : null)}
//         >
//           Pricing
//         </NavLink>
//         <NavLink
//           to="about"
//           style={({ isActive }) => (isActive ? activeStyles : null)}
//         >
//           About Us
//         </NavLink>
//         <NavLink
//           to="partnership"
//           style={({ isActive }) => (isActive ? activeStyles : null)}
//         >
//           Partnership
//         </NavLink>
//         <NavLink
//           to="contact"
//           style={({ isActive }) => (isActive ? activeStyles : null)}
//         >
//           Contact Us
//         </NavLink>
//       </nav>
//       <NavLink
//         to="api"
//         style={({ isActive }) => (isActive ? activeStyles : null)}
//         className="api-nav"
//       >
//         Api Documentation
//       </NavLink> */}
//     </header>
//   );
// }
