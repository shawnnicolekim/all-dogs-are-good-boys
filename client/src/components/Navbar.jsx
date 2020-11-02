import React from 'react';
import { NavLink } from 'react-router-dom';

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