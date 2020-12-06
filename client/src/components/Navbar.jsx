import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
      component={Homepage}
      >
        Home
      </NavLink>
      <Link exact to='/logout' component={Logout}>
        Logout
      </Link>
    </div>
  )
}

export default Navbar;