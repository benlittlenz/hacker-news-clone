import React, { useState } from "react";

const Login = props => {
  return (
    <div>
      <h2 className="mv3">Create Account</h2>
      <form className="flex flex-column">
        <input 
          type="text"
          placeholder="name"
          autoComplete="off"
        />
        <input 
          type="email"
          placeholder="email"
          autoComplete="off"
        />
        <input 
          type="password"
          placeholder="password"
        />
        <div className="flex mv3">
          <button
            type="button"
            className="button pointer mv2"

          >Submit</button>
          <button type="button" className="pointer button">
            Already have an account?
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;