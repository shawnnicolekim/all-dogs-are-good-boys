import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';

const authContext = createContext();
const useAuth = () => useContext(authContext);

// Provider hook
const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const signup = (email, username, password, done) => {
    axios.post('/signup', {
      email,
      username,
      password,
    })
      .then((res) => {
        if (res.data.registered) {
          return true;
        // need this else statement? If signup info is incorrect, it won't get to this .then block.
        }
        return false;
      })
      .then((signedUp) => {
        done(null, signedUp);
      })
      .catch((err) => {
        done(err, false);
      });
  };

  const login = (username, password, done) => {
    axios.post('/login', {
      username,
      password,
    })
      .then((res) => {
        if (res.data.user) {
          setUser(res.data.user);
          return true;
        // need this else statement? If login info is incorrect, it won't get to this .then block.
        }
        return false;
      })
      .then((loggedIn) => {
        done(null, loggedIn);
      })
      .catch((err) => {
        done(err, false);
      });
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    signup,
    login,
    logout,
  };
};

// Provider component
const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
};

export {
  AuthProvider,
  useAuth,
};

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
