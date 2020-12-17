import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../auth/Auth.jsx';
import * as Styled from './onboardingStyles.jsx';

const Login = () => {
  const auth = useAuth();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginInfo, setLoginInfo] = useState(false);

  // eslint-disable-next-line consistent-return
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
      <Styled.FormWrapper onSubmit={onLoginSubmit}>
        {incorrectLoginInfo()}
        <Styled.FormInput type="text" placeholder="Username" onChange={handleUsernameChange} />
        <Styled.FormInput type="password" placeholder="Password" onChange={handlePasswordChange} />
        <Styled.SubmitButton type="submit" value="Login" />
      </Styled.FormWrapper>
      <Styled.SignupLink to="/signup">Need to create an account? Click here to signup!</Styled.SignupLink>
    </div>
  );
};

export default Login;
