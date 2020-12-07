import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Homepage from './Homepage.jsx';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios.get('/authenticate')
      .then(res => {
        console.log('data: ', res);
        setAuthenticated(res.data.authenticated);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
      <div>
      <Switch>
        <Route exact path ='/login' component={Login} />
        <Route exact path ='/signup' component={Signup} />
        <Route path ='/' >
          {authenticated ? <Homepage /> : <Redirect to ='/login' />}
        </Route>
      </Switch>
      </div>
  )
}

export default App;