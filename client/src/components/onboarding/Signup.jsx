import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './onboardingStyles.jsx';
import { useAuth } from '../../auth/Auth.jsx';

const Signup = () => {
  const auth = useAuth();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signupInfo, setSignupInfo] = useState(false);

  const incorrectSignupInfo = () => {
    if (signupInfo) {
      return (
        <Styled.ErrorMessage>
          {username && email && password ? ('There is already a user with that username. Please select a different username.') : ('Please fill out all boxes in order to sign up.')}
        </Styled.ErrorMessage>
      );
    }
  };

  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const onSignupSubmit = (event) => {
    event.preventDefault();
    auth.signup(email, username, password, (err, signedUp) => {
      if (err) {
        setUsername('');
        setPassword('');
        setSignupInfo(true);
      }

      if (signedUp) {
        history.replace('/login');
      }
    });
  };

  return (
    <div>
      <Styled.FormWrapper onSubmit={onSignupSubmit}>
        {incorrectSignupInfo()}
        <Styled.Message>*All inputs are required.</Styled.Message>
        <Styled.FormInput type="text" placeholder="Username" onChange={handleUsernameChange} />
        <Styled.FormInput type="text" placeholder="Email" onChange={handleEmailChange} />
        <Styled.FormInput type="password" placeholder="Password" onChange={handlePasswordChange} />
        <Styled.SubmitButton type="submit" value="Signup" />
      </Styled.FormWrapper>
      <Styled.LoginLink to="/login">Already have an account? Click here to login!</Styled.LoginLink>
    </div>
  );
};

export default Signup;
