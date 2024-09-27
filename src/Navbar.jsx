import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Ensure you create a CSS file for styling

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li class="my_name" >
          Andal
        </li>
        <li>
          <NavLink 
            to="/" 
            exact 
            activeClassName="active"
            className="nav-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            activeClassName="active"
            className="nav-link"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            activeClassName="active"
            className="nav-link"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
