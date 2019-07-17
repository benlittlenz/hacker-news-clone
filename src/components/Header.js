import React from "react";
import { withRouter, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="flex">
        <NavLink to="/" className="header-title">
          Hacker News
        </NavLink>
        <NavLink to="/new" className="header-link">
          New
        </NavLink>
        <div className="divider"> | </div>
        <NavLink to="/new" className="header-link">
          Top
        </NavLink>
        <div className="divider"> | </div>
        <NavLink to="/search" className="header-link">Search</NavLink>
        <div className="divider"> | </div>
        <NavLink to="/create" className="header-link">Submit</NavLink>
      </div>
      <div className="flex">
        <NavLink to="/login" className="header-link">Logins</NavLink>
      </div>
    </div>
  )
}

export default Header;