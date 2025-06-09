import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>Welcome to the Notes App</h1>
        <div>
            <label>
                Enter your name:
            </label>
            <input type='text' placeholder='enter your name here' />
            <label>
                Enter your email:
            </label>
            <input type='email' placeholder='enter your email here' />
            <button>Signup</button>
        </div>
      
    </div>
  )
}

export default Signup
