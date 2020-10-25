import React from 'react';

const Signup = () => {
  render (
    <div id='signup'>
      <h1>Signup</h1>
      <div>All inputs are required.</div>
      <form action='/signup' method='POST'>
        <label for='username'></label>
        <input type='text' id='username' name='username'></input>
        <label for='email'></label>
        <input type='text' id='email' name='email'></input>
        <label for='password'></label>
        <input type='text' id='password' name='password'></input>
        <input type='button'>Signup</input>
      </form>
      <a href='./Login.jsx'>Go to Login Page</a>
    </div>
  )
}

export default Signup;