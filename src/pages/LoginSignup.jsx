import React, { useState } from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  const [state , setState] = useState('Login')
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>{state}</h1>
            <div className="loginsignup-fields">
              {state === 'Sign up' ?<input type="text" placeholder='Your Name' /> : <></>}
              <input type="email" placeholder='Email Address' />
              <input type="password" placeholder='Password' />
            </div>
            <button>Continue</button>
            {
              state === 'Sign up' ? <p className="loginsignup-login">
              Already have an account ? <span onClick={()=>setState('Login')} >Login here</span>
            </p> :  <p className="loginsignup-login">
              Create an account ? <span onClick={()=>setState('Sign up')} >Sign up</span>
            </p> 
            }
            
            <div className="loginsignup-agree">
              <input type="checkbox" name='' id='' />
              <p>By continuing, I agree to the terms of use & privacy </p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup
