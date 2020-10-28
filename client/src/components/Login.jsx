import React, { useState } from 'react';

const Login = () => {
  return (
    <div id='login'>
      <h1>Login</h1>
      <form action='/login' method='GET'>
        <label for='username'>Username</label>
        <input type='text' id='username' name='username'></input>
        <br></br>

        <label for='password'>Password</label>
        <input type='text' id='password' name='password'></input>
        <br></br>

        <input type='button'>Login</input>
      </form>
      <a href='./Signup.jsx'>Need to create an account? Click here to signup!</a>
    </div>
  )
}

export default Login;