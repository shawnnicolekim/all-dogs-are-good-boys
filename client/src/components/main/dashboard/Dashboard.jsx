import React, { useState, useEffect } from 'react';
import CreatePost from './CreatePost.jsx';
import PostList from './PostList.jsx';

const Dashboard = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // axios get for all posts
    // setPosts to received posts
  });

  return (
    <div>
      <CreatePost setPosts={setPosts} />
      <PostList posts={posts} />
    </div>
  );
};

export default Dashboard;
