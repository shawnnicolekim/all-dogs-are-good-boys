import React from 'react';

const Login = () => {
  return (
    <div id='login'>
      <h1>Login</h1>
      <form action='/login' method='GET'>
        <label for='username'></label>
        <input type='text' id='username' name='username'></input>
        <label for='password'></label>
        <input type='text' id='password' name='password'></input>
        <input type='button'>Login</input>
      </form>
      <a href='./Signup.jsx'>Need to create an account? Click here to signup!</a>
    </div>
  )
}

export default Signup;