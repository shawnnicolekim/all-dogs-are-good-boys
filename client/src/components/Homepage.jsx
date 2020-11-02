import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './Login.jsx';
import Navbar from './Navbar.jsx';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      Homepage
    </div>
  )
}

export default Homepage;