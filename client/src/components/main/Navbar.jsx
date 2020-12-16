import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../auth/Auth.jsx';

const StyledNavbar = styled.div`
  display: grid;
  grid-template-areas:
    "dashboardLink profileLink logout";
  grid-template-columns: auto, 30px, 30px;
  border: 2px solid black
`;

const DashboardLink = styled(Link)`
  grid-area: dashboardLink;
  font-size: 20px;
`;

const ProfileLink = styled(Link)`
  grid-area: profileLink;
  border-radius: 4px;
  border: 2px solid black
`;

const LogoutLink = styled(ProfileLink)`
  grid-area: logout;
  font-weight: bold
`;

const Navbar = () => {
  const auth = useAuth();

  const userLogout = () => {
    auth.logout(() => history.push('/'));
  };

  return (
    <StyledNavbar>
      <DashboardLink to='/dashboard'>All Dogs Are Good Boys</DashboardLink>
      <ProfileLink to={'/user'}>Profile</ProfileLink>
      <LogoutLink onClick={userLogout}>Logout</LogoutLink>
    </StyledNavbar>
  );
};

export default Navbar;
