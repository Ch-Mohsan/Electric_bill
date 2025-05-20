import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mynav">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/nav-logo.svg"
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top me-2"
          />
          BillReminder
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bills">Bills</NavLink>
            </li>
          </ul>

          <div className="d-flex">
            <NavLink to="/login" className="btn btn-outline-light me-2">Login</NavLink>
            <NavLink to="/signup" className="btn btn-light">Sign Up</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
