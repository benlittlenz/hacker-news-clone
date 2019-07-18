import React, { useState } from "react";
import useFormValidation from './useFormValidation'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

const Login = props => {
  const { handleChange, handleSubmit, values } = useFormValidation(INITIAL_STATE);
  const [login, setLogin] = useState(true);
  return (
    <div>
      <h2 className="mv3">{login ? 'Login' : 'Create Account'}</h2>
      <form 
        onSubmit={console.log('gfdgdf')}
        className="flex flex-column">
        {!login && (
          <input 
            onChange={handleChange}
            value={values.name}
            name="name"
            type="text"
            placeholder="name"
            autoComplete="off"
          />)}
        <input 
          onChange={handleChange}
          value={values.email}
          type="email"
          name="email"
          placeholder="email"
          autoComplete="off"
        />
        <input 
          onChange={handleChange}
          value={values.password}
          type="password"
          name="password"
          placeholder="password"
        />
        <div className="flex mv3">
          <button
            type="button"
            className="button pointer mv2"
            onClick={handleSubmit}
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