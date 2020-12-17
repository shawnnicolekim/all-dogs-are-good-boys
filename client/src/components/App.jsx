import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { useAuth } from '../auth/Auth.jsx';
import * as Styled from './appStyles.jsx';

import PrivateRoute from '../auth/PrivateRoute.jsx';
import RestrictedRoute from '../auth/RestrictedRoute.jsx';
import Navbar from './main/Navbar.jsx';
import Login from './onboarding/Login.jsx';
import Signup from './onboarding/Signup.jsx';
import Dashboard from './main/dashboard/Dashboard.jsx';
import Profile from './main/user-profile/Profile.jsx';
import FrontPage from './onboarding/FrontPage.jsx';

const App = () => {
  const auth = useAuth();

  const navbarDisplay = () => {
    if (auth.user) {
      return <Navbar />;
    }
    return <Styled.TitleButton to="/">All Dogs Are Good Boys</Styled.TitleButton>;
  };

  console.log('auth at app: ', auth);
  return (
    <div>
      {navbarDisplay()}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/user" component={Profile} />
        <RestrictedRoute exact path="/" component={FrontPage} />
        <Route path="*" component={() => '404 NOT FOUND'} />
      </Switch>
    </div>
  );
};

export default App;
