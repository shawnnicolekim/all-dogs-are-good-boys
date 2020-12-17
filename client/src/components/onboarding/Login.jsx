import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../auth/Auth.jsx';
import * as Styled from './onboardingStyles.jsx';

const Login = () => {
  const auth = useAuth();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginInfo, setLoginInfo] = useState(false);

  const incorrectLoginInfo = () => {
    if (loginInfo) {
      return (
        <Styled.ErrorMessage>
          You input the wrong username or password. Please try again.
        </Styled.ErrorMessage>
      );
    }
  };

  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const onLoginSubmit = (event) => {
    event.preventDefault();
    auth.login(username, password, (err, loggedIn) => {
      if (err) {
        setPassword('');
        setLoginInfo(true);
      }

      if (loggedIn) {
        history.replace('/dashboard');
      }
    });
  };

  return (
    <div>
      {incorrectLoginInfo()}
      <Styled.FormWrapper>
        <input type="text" placeholder="Username" onChange={handleUsernameChange} />
        <br />

        <input type="text" placeholder="Password" onChange={handlePasswordChange} />
        <br />

        <Styled.SubmitButton type="submit" value="Login" onClick={onLoginSubmit} />
      </Styled.FormWrapper>
      <Styled.SignupLink to="/signup">Need to create an account? Click here to signup!</Styled.SignupLink>
    </div>
  );
};

export default Login;
