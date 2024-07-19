import React from 'react'
import './SigninSignup.css'

export const SigninSignup = () => {
  return (
    <div className="signinsignup">
      <div className="signinsignup-container">
        <h1>Sign Up</h1>
        <div className="signinsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className="signinsignup-signin">Already have an account? <span>Sign in here</span></p>
        <div className="signinsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use &privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
