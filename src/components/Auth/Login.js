import React, { useState } from "react";
import useFormValidation from './useFormValidation'
import validateLogin from './validateLogin';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

const Login = props => {
  const { 
    handleChange, 
    handleSubmit, 
    values,
    handleBlur,
    errors,
    isSubmitting
  } = useFormValidation(
    INITIAL_STATE,
    validateLogin
  );

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
          onBlur={handleBlur}
          value={values.email}
          onBlur={handleBlur}
          className={errors.email && 'error-input' }
          type="email"
          name="email"
          placeholder="email"
          autoComplete="off"
        />
        {errors.email && <p className='error-text'>{errors.email}</p>}
        <input 
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className={errors.password && 'error-input' }
          type="password"
          name="password"
          placeholder="password"
        />
        {errors.password && <p className='error-text'>{errors.password}</p>}
        <div className="flex mv3">
          <button
            disabled={isSubmitting}
            style={{background: isSubmitting ? 'gray' : 'orange'}}
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