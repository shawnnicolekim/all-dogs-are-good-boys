import React from 'react';
import { useAuth } from '../../auth/Auth.jsx';
import * as Styled from './navbarStyles.js';

const Navbar = () => {
  const auth = useAuth();

  const userLogout = () => {
    auth.logout(() => history.push('/'));
  };

  return (
    <Styled.NavbarWrapper>
      <Styled.DashboardLink to="/dashboard">All Dogs Are Good Boys</Styled.DashboardLink>
      <Styled.ProfileLink to="/user">Profile</Styled.ProfileLink>
      <Styled.LogoutLink onClick={userLogout}>Logout</Styled.LogoutLink>
    </Styled.NavbarWrapper>
  );
};

export default Navbar;
