import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './Login.jsx';

const Logout = () => {
  useEffect(() => {
    const logOutTimer = setTimeout(() => {

    });
  })
  return (
    <div>
      You have been logged out! You will be redirected to the login page in 10 seconds or <Link to='/login'>click here</Link> to go now.
    </div>
  )
}

export default Logout;