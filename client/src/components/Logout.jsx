import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login.jsx';

const Logout = () => {
  useEffect(() => {
    axios.post('/logout')
      .then(() => {
        window.location.href='/login';
      })
      .catch(err => {
        console.error(err);
      })
  }, []);
  return (
    <div>
      You've been logged out!
    </div>
  )
}

export default Logout;