import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/movies" className="navbar-brand">
          Vidly
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/movies" className="nav-link" aria-current="page">
              Movies
            </NavLink>
            <NavLink to="/customers" className="nav-link">
              Customers
            </NavLink>
            <NavLink to="/rentals" className="nav-link">
              Rentals
            </NavLink>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>

            <NavLink to="/register" className="nav-link">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
