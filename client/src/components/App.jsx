import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from '../auth/PrivateRoute.jsx';
import Homepage from './Homepage.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Dashboard from './Dashboard.jsx';

const App = () => {
  return (
    <div>
      <h1><a href='/dashboard'>All Dogs Are Good Boys</a></h1>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path='/' component={Homepage} />
        <Route path='*' component={() => '404 NOT FOUND'} />
      </Switch>
    </div>
  )
}

export default App;