import React from 'react';
import Post from './Post.jsx';

const PostList = ({posts}) => (
  <div className="postList">
    <ul>
      {posts.map(post => {
        return <Post post={post} />;
      })}
    </ul>
  </div>
);

export default PostList;
