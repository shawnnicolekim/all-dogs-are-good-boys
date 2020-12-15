import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../auth/Auth.jsx';
import Profile from './Profile.jsx';

const StyledNavbar = styled.div`
  background-color: palevioletred;
`

const StyledHomeLink = styled(Link)`
  font-size: 20px;
`

const StyledLink = styled(Link)`
  color: palevioletred;
  background: papayawhip;
  border-radius: 4px;
  border: 2px solid black
`

const Navbar = () => {
  const auth = useAuth();

  const userLogout = () => {
    auth.logout(() => history.push('/'));
  }

  return (
    <StyledNavbar>
      <StyledHomeLink to='/'>All Dogs Are Good Boys</StyledHomeLink>
      <StyledLink to={'/user'}>Profile</StyledLink>
      <StyledLink onClick={userLogout}>Logout</StyledLink>
    </StyledNavbar>
  )
}

export default Navbar