import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Login from './Login.jsx';
import Signup from './Signup.jsx';

const Homepage = () => {
  return (
      <div>
        Homepage
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
        </ul>
      </div>
  )
}

export default Homepage;