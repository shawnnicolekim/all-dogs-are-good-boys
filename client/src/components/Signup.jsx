import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div id='signup'>
      <h1>Signup</h1>
      <div>All inputs are required.</div>
      <form action='/signup' method='POST'>
        <label for='username'>Username</label>
        <input type='text' id='username' name='username'></input>
        <br></br>

        <label for='email'>Email</label>
        <input type='text' id='email' name='email'></input>
        <br></br>

        <label for='password'>Password</label>
        <input type='text' id='password' name='password'></input>
        <br></br>

        <label for='avatar'>Profile Pic </label>
        <input type='file' id='avatar' name='avatar'></input>
        <br></br>

        <input type='submit' value='Signup'></input>
      </form>
      <Link to='/login'>Go to the login page!</Link>
    </div>
  )
}

export default Signup;