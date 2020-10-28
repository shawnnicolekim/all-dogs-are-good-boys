import React, { useState, useEffect } from 'react';
import axios from 'axios';
/*
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
*/

import Login from './Login.jsx';
import PostList from './PostList.jsx';

const App = () => {
  const [loggedIn, useLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('/')
      .then(res => {
        console.log('after useEffect res: ', res.status);
      })
      .catch(err => {
        console.error(err);
      })
  })

  return (
    <div>Hi</div>
  )
}

export default App;