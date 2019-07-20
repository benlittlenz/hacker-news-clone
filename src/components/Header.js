import React, { useContext } from "react";
import { withRouter, NavLink } from 'react-router-dom';
import { FirebaseContext } from '../firebase';

const Header = () => {
  const { user, firebase} = useContext(FirebaseContext)
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
        {user && ( 
          <>
          <div className="divider"> | </div>
          <NavLink to="/create" className="header-link">Submit</NavLink>
          </>
        )}
      </div>
      <div className="flex">
      {user ? (
        <>
          <div className="header-name">{user.displayName}</div>
          <div className="divider">|</div>
          <div 
            className="header-button"
            onClick={() => firebase.logout()}  
          >Logout</div>
        </>
      )
       : (
            <NavLink to="/login" className="header-link">
              Login
            </NavLink>
          )
      }
        
      </div>
    </div>
  )
}

export default Header;