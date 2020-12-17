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
          There is already a user with that username. Please select a different username.
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
      {incorrectSignupInfo()}
      <Styled.FormWrapper>
        <div>All inputs are required.</div>

        <input type="text" placeholder="Username" onChange={handleUsernameChange} />
        <br />

        <input type="text" placeholder="Email" onChange={handleEmailChange} />
        <br />

        <input type="text" placeholder="Password" onChange={handlePasswordChange} />
        <br />

        <Styled.SubmitButton type="submit" value="Signup" onClick={onSignupSubmit} />
      </Styled.FormWrapper>
      <Styled.LoginLink to="/login">Already have an account? Click here to login!</Styled.LoginLink>
    </div>
  );
};

export default Signup;
