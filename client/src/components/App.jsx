import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from 'react-router-dom';
import { useAuth } from '../auth/Auth.jsx';

import PrivateRoute from '../auth/PrivateRoute.jsx';
import RestrictedRoute from '../auth/RestrictedRoute.jsx';
import Navbar from './Navbar.jsx';
import Homepage from './Homepage.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Dashboard from './Dashboard.jsx';

const App = () => {
  const auth = useAuth();

  const navbarDisplay = () => {
    if (auth.user) {
      return <Navbar />
    } else {
      return <h1>All Dogs Are Good Boys</h1>
    }
  }

  console.log('auth at app: ', auth);
  return (
    <div>
      {navbarDisplay()}
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <RestrictedRoute exact path='/' component={Homepage} />
        <Route path='*' component={() => '404 NOT FOUND'} />
      </Switch>
    </div>
  )
}

export default App;