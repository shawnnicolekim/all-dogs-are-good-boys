import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreatePost from './CreatePost.jsx';
import PostList from './PostList.jsx';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts')
      .then((res) => {
        console.log('res.data: ', res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.error('Could not receive posts, ', err);
      });
  }, []);

  return (
    <div>
      <CreatePost setPosts={setPosts} />
      <PostList posts={posts} />
    </div>
  );
};

export default Dashboard;
