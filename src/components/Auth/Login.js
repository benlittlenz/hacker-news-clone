import React, { useState } from "react";

const Login = props => {
  const [login, setLogin] = useState(true);
  return (
    <div>
      <h2 className="mv3">{login ? 'Login' : 'Create Account'}</h2>
      <form className="flex flex-column">
        {!login && <input 
          type="text"
          placeholder="name"
          autoComplete="off"
        />}
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
          <button type="button" className="pointer button"
            onClick={() => setLogin(prevLogin => !prevLogin)}
          >
            {login ? "need to create an account" 
                   : "Already have an account?"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;