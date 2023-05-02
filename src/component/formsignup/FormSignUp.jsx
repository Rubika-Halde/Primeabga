import React from 'react'

const FormSignUp = () => {
  return (
    <div className="register">
      <div className="register-left">
        <h2 className="signup">Signup</h2>
      </div>
      <div className="register-right">
        <form
          className="register-form"
          // onSubmit={handleSubmit}
        >
          <div className="form-inputs">
            <input
              className="form-input"
              placeholder="Enter Email address"
              id="email"
              name="email"
              type="email"
              //   onChange={handleChange}
              //   value={values.email}
            />
            {/* {errors.email && <p>{errors.email}</p>} */}
          </div>
          <div className="form-inputs">
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              //   value={values.password}
              //   onChange={handleChange}
            />
            {/* {errors.password && <p>{errors.password}</p>} */}
          </div>
        </form>
        <div className="buttons">
          <button type="submit" className="btn">
            REGISTER
          </button>
          <button className="EXISTING">EXISTING USER ? LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default FormSignUp
