import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../auth/Auth.jsx';

const Login = () => {
  const auth = useAuth();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginInfo, setLoginInfo] = useState(false);

  const incorrectLoginInfo = () => {
    if (loginInfo) {
      return (
        <p>You input the wrong username or password. Please try again.</p>
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
    <div id='login'>
      <h1>Login</h1>
      {incorrectLoginInfo()}
      <form onSubmit={onLoginSubmit}>
        <label for='username'>Username</label>
        <input type='text' id='username' name='username' onChange={handleUsernameChange}/>
        <br></br>

        <label for='password'>Password</label>
        <input type='text' id='password' name='password' onChange={handlePasswordChange}/>
        <br></br>

        <input type='submit' value='Login'/>
      </form>
      <Link to='/signup'>Need to create an account? Click here to signup!</Link>
    </div>
  );
};

export default Login;
