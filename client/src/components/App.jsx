import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Login from './Login.jsx';
import Homepage from './Homepage.jsx';

const App = () => {
  return (
    <Router>
      <Route exact path ='/login' component={Login} />
      <Route exact path ='/' component={Homepage} />
    </Router>
  )
}

export default App;