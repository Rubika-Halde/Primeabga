import React, { useState } from 'react'
import FormSignUp from '../formsignup/FormSignUp'
import { IoMdClose } from 'react-icons/io'
const FormLogin = ({ setProfile }) => {
  const handleOnLoginClick = () => {
    setProfile(false)
  }

  return (
    <div className="login">
      <div className="close-icon" onClick={handleOnLoginClick}>
        <IoMdClose />
      </div>
      <div className="login-left">
        <h2 className="login-left-h">Login</h2>
        <p className="login-left-p">
          Get access to your orders, Wishlist and Recommendations.
        </p>
      </div>
      <div className="right-side">
        {/* <form onSubmit={handleSubmit}> */}
        <div className="inputs">
          <input
            className="input"
            placeholder="Enter username/Email address"
            id="email"
            name="email"
            type="email"
            //   onChange={handleChange}
            //   value={values.email}
          />
          {/* {errors.email && <p>{errors.email}</p>} */}
        </div>
        <div className="inputs">
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Enter password"
            //   value={values.password}
            //   onChange={handleChange}
          />
          {/* {errors.password && <p>{errors.password}</p>} */}
        </div>
        <div className="login-right-one">
          <span className="checkbox">
            <input type="checkbox" className="checkbox-profile" />
            <p className="Remember">Remember Me</p>
          </span>
          <p className="Password">Lost Your Password Login</p>
        </div>
        <button type="submit" className="button-one">
          LOGIN
        </button>
        {/* </form> */}
        <button className="button-two" onClick={handleOnLoginClick}>
          New To PrimeABGB ? Sign UP
        </button>
        {/* <div className="l">{login ? <FormSignUp /> : ''}</div> */}
      </div>
    </div>
  )
}

export default FormLogin
