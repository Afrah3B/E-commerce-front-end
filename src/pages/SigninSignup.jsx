import React, { useState } from 'react'
import './SigninSignup.css'

export const SigninSignup = () => {
  const [state, setState] = useState("sign up");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const signin = async () => {
    console.log('signin function', formData);
    let responseData;
    await fetch('http://localhost:4000/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data);
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else { alert(responseData.errors) }
  }
  const signup = async () => {
    console.log('signup function', formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data);
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else { alert(responseData.errors) }
  }

  return (
    <div className="signinsignup">
      <div className="signinsignup-container">
        <h1>{state}</h1>
        <div className="signinsignup-fields">
          {state === 'sign up' ? <input type="text" placeholder='Your Name' name='username' value={formData.username} onChange={changeHandler} /> : <></>}

          <input type="email" placeholder='Your Email' name='email' value={formData.email} onChange={changeHandler} />
          <input type="password" placeholder='password' name='password' value={formData.password} onChange={changeHandler} />
        </div>
        <button onClick={() => { state === 'sign up' ? signup() : signin() }}>Continue</button>
        {state === 'sign up' ?
          <p className="signinsignup-signin">Already have an account? <span onClick={() => { setState('sign in') }}>Sign in here</span></p>
          : <p className="signinsignup-signin">Create an account? <span onClick={() => { setState('sign up') }}>Sign up here</span></p>}

        <div className="signinsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use &privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
