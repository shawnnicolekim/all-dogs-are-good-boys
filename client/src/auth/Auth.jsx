import React, { useState, createContext, useContext, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

const authContext = createContext();
const useAuth = () => {
  return useContext(authContext);
}

// Provider hook
const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const signup = (email, username, password) => {
    axios.post('/signup', {
      email,
      username,
      password
    })
      .then(res => {
        if (res.data.registered) {
          return <Redirect to='/login' />
        }
      })
      .catch(err => {
        // is this the right message?
        console.error('Client: signup failed. ', err);
      })
  }

  const login = (username, password, done) => {
    axios.post('/login', {
      username,
      password
    })
      .then(res => {
        if (res.data.user) {
          setUser(res.data.user);
          return true;
        }
      })
      .then(loggedIn => {
        done(null, loggedIn);
      })
      .catch(err => {
        // is this the right message?
        done(err, false);
      })
  }

  const logout = () => {
    axios.post('/logout')
      .then(res => {
        setUser(false);
      })
      .catch(err => {
        console.error('Client: logout failed. ', err);
      })
  }

  return {
    user,
    signup,
    login,
    logout
  }
}

// Provider component
const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

export {
  AuthProvider,
  useAuth
}

/*
class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(done) {
    this.authenticated = true;
    done();
  }

  logout(done) {
    this.authenticated = false;
    done();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
// may need to create a new instance everytime
*/