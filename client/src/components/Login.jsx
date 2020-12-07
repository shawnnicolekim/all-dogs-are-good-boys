import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
/*
POTENTIALLY CHANGE TO RECEIVE INFO FROM APP.POST('/LOGIN')
  const onLoginSubmit = (event) => {
    event.preventDefault();
    axios.post('/login')
      .then(res => {

      })
      .catch(err => {
        console.error(err);
      })
  }
*/

  return (
    <div id='login'>
      <h1>Login</h1>
      <form onSubmit={onLoginSubmit}>
        <label for='username'>Username</label>
        <input type='text' id='username' name='username' />
        <br></br>

        <label for='password'>Password</label>
        <input type='text' id='password' name='password' />
        <br></br>

        <input type='submit' value='Login'/>
      </form>
      <Link to='/signup'>Need to create an account? Click here to signup!</Link>
    </div>
  )
}

export default Login;