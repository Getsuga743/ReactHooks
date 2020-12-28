import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="navbar-nav">
      <div className="nav-item">
        <NavLink exact activeClassName="active border" className="nav-link" to="/">
          Home
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          exact
          activeClassName="active border"
          className="nav-link"
          to="/about"
        >
          About
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          exact
          activeClassName="active border"
          className="nav-link"
          to="/users"
        >
          Users
        </NavLink>
      </div>
    </div>
  </nav>
);

export default NavBar;
