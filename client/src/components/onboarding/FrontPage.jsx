import React from 'react';
import * as Styled from './obStyles.jsx';

const FrontPage = () => (
  <div>
    Frontpage
    <Styled.LoginLink to="/login">Login</Styled.LoginLink>
    <Styled.SignupLink to="/signup">Signup</Styled.SignupLink>
  </div>
);

export default FrontPage;
