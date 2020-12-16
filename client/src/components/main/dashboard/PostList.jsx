import React from 'react';
import PostEntry from './PostEntry.jsx';

const PostList = ({ posts }) => (
  <div>
    {posts.map((post) => <PostEntry post={post} />)}
  </div>
);

export default PostList;
