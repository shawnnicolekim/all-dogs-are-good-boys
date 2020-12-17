import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "dashboardLink profileLink logout";
  grid-template-columns: 1fr repeat(2, fit-content(100px));
  border: 2px solid black;
`;

export const DashboardLink = styled(Link)`
  grid-area: dashboardLink;
  justify-self: start;
  border: 2px solid black;
  font-size: 40px;
  padding: 10px;
  text-decoration: none;
`;

export const ProfileLink = styled(DashboardLink)`
  grid-area: profileLink;
  justify-self: end;
`;

export const LogoutLink = styled(ProfileLink)`
  grid-area: logout;
  font-weight: bold;
`;
