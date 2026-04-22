import React, { useState } from "react";
// import { NavLink } from "react-bootstrap";
import funmi from "./assets/funmi.png";
import { NavLink } from "react-router";
import { RiMenu3Line } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <nav>
        <div>
          <img className="image" src={funmi} alt="" />
        </div>
        <div>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary-subtle text-dark px-3 py-2 rounded nav-link-custom"
                    : "text-white px-3 py-2 nav-link-custom"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary-subtle text-dark px-3 py-2 rounded nav-link-custom"
                    : "text-white px-3 py-2 nav-link-custom"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary-subtle text-dark px-3 py-2 rounded nav-link-custom"
                    : "text-white px-3 py-2 nav-link-custom"
                }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary-subtle text-dark px-3 py-2 rounded nav-link-custom"
                    : "text-white px-3 py-2 nav-link-custom"
                }
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary-subtle text-dark px-3 py-2 rounded nav-link-custom"
                    : "text-white px-3 py-2 nav-link-custom"
                }
              >
                {" "}
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <RiMenu3Line className="menu" onClick={() => setShowNav(!showNav)} />
        {showNav && (
          <div className="mobile-nav">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <hr />
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <hr />
              <li>
                <NavLink to="/categories">Categories</NavLink>
              </li>
              <hr />
              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>
              <hr />
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
