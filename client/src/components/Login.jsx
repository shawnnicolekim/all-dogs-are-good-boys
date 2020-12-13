import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value)
  }

  const onLoginSubmit = (event) => {
    event.preventDefault();
    axios.post('/login', {
      username,
      password
    })
      .then(res => {
        console.log('res after axios: ', res);
        window.location.href='/';
      })
      .catch(() => {
        window.location.reload();
      })
  }


  return (
    <div id='login'>
      <h1>Login</h1>
      <form onSubmit={onLoginSubmit}>
        <label for='username'>Username</label>
        <input type='text' id='username' name='username' onChange={handleUsernameChange}/>
        <br></br>

        <label for='password'>Password</label>
        <input type='text' id='password' name='password' onChange={handlePasswordChange}/>
        <br></br>

        <input type='submit' value='Login'/>
      </form>
      <Link to='/signup'>Need to create an account? Click here to signup!</Link>
    </div>
  )
}

export default Login;