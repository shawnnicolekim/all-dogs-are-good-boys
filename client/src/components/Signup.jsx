import React, { useState } from 'react';

const Signup = () => {
  return (
    <div id='signup'>
      <h1>Signup</h1>
      <div>All inputs are required.</div>
      <form onSubmit={handleSubmit}>
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
      <a href='./Login.jsx'>Go to Login Page</a>
    </div>
  )
}

export default Signup;