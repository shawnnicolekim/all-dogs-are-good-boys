import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import axios from 'axios';

import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Homepage from './Homepage.jsx';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path ='/login' component={Login} />
        <Route exact path ='/signup' component={Signup} />
        <Route path ='/' component={Homepage} />
      </Switch>
    </div>
  )
}

export default App;