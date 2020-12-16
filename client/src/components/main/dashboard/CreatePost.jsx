import React from 'react';

const CreatePost = () => {

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

export default CreatePost;
