import React,{useState} from 'react'

const Login = ({onLogin}) => {
  return (
    <div>
        <h1>Welcome Again to the Notes App</h1>
        <div>
        <label>
            Enter Your Email 
        </label>
        <input type='email' placeholder='enter your email here'/>
        <label>
            Enter Your Password
        </label>
        <input type='password' placeholder='enter your password here'/>
        <button>Login</button>
        </div>
      
    </div>
  )
}

export default Login
