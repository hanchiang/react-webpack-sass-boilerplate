import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="wrapper navbar">
      <div className="content-wrapper navbar-content">
        <NavLink to='/' className="navbar-item link" activeClassName='active-link'>
          <span>Home</span>
        </NavLink>

        <NavLink to='/about' className="navbar-item link" activeClassName='active-link'>
          <span className="collection">About</span>
        </NavLink>
      </div>
    </nav>
  );
}
