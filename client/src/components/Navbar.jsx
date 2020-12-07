import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import Logout from './Logout.jsx';

const Navbar = () => {
  return (
    <div>
    <NavLink
      exact to='/'
      activeStyle={{
        fontWeight: 'bold',
        color: 'blue'
      }}
    >
      Home
    </NavLink>
    <NavLink exact to='/logout'>
      Logout
    </NavLink>
      </div>
  )
}

export default Navbar;