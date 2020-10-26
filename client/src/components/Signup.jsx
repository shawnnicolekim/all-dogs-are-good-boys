import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');s
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*
  const usernameChange = (event) => {
    setUsername(event.target.value)
  }

  const emailChange = (event) => {
    setEmail(event.target.value)
  }

  const passwordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = () => {
    axios.post('/signup')
  }
  */

  return (
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
        <label for='avatar'></label>
        <input type='text' id='avatar' name='avatar'></input>
        <input type='submit' value='Signup'></input>
      </form>
      <a href='./Login.jsx'>Go to Login Page</a>
    </div>
  )
}

export default Signup;