import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import PostList from './PostList.jsx';

const App = () => {
  render() {
    return (
      <div>
        <PostList posts={posts} />
      </div>
    )
  }
}

export default App;