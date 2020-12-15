import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Login from './Login.jsx';
import Signup from './Signup.jsx';

const StyledLink = styled(Link)`
  color: palevioletred;
  background: papayawhip;
  border-radius: 4px;
  border: 2px solid black
`

const Homepage = () => {
  return (
      <div>
        Homepage
        <StyledLink to='/login'>Login</StyledLink>
        <StyledLink to='/signup'>Signup</StyledLink>
      </div>
  )
}

export default Homepage;