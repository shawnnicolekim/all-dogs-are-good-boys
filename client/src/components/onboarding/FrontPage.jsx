import React from 'react';
import * as Styled from './onboardingStyles.jsx';

const FrontPage = () => (
  <Styled.FrontPageWrapper>
    <Styled.LoginLink to="/login">Login</Styled.LoginLink>
    <Styled.SignupLink to="/signup">Signup</Styled.SignupLink>
  </Styled.FrontPageWrapper>
);

export default FrontPage;
