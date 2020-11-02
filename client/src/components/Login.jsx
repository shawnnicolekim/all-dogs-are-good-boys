import React from 'react';

const Login = () => {
  return (
    <div id='login'>
      <h1>Login</h1>
      <form action='/login' method='GET'>
        <label for='username'>Username</label>
        <input type='text' id='username' name='username' />
        <br></br>

        <label for='password'>Password</label>
        <input type='text' id='password' name='password' />
        <br></br>

        <input type='button' value='Login'/>
      </form>
      <a href='./Signup.jsx'>Need to create an account? Click here to signup!</a>
    </div>
  )
}

export default Login;