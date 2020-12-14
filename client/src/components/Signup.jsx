import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value)
  }

  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value)
  }

  const onSignupSubmit = (event) => {
    event.preventDefault();

    axios.post('/signup', {
      username,
      email,
      password
    })
      .then(res => {
        if (res.data.registered) {
          props.history.push('/login')
        }
      })
      .catch(() => {
        if (!res.data.registered) {
          // if signup fails, need to reset form and let user know it failed
        }
      })
  }

  return (
    <div id='signup'>
      <h1>Signup</h1>
      <div>All inputs are required.</div>
      <form onSubmit={onSignupSubmit}>
        <label for='username'>Username</label>
        <input type='text' id='username' name='username' onChange={handleUsernameChange} />
        <br></br>

        <label for='email'>Email</label>
        <input type='text' id='email' name='email' onChange={handleEmailChange} />
        <br></br>

        <label for='password'>Password</label>
        <input type='text' id='password' name='password' onChange={handlePasswordChange} />
        <br></br>

        <input type='submit' value='Signup' />
      </form>
      <Link to='/login'>Already have an account? Go to the login page!</Link>
    </div>
  )
}

export default Signup;