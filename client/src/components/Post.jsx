import React from 'react';

const Post = ({post}) => (
  <li>
    <div>{post.name}</div>
    <div>{post.caption}</div>
    <div>{post.timestamp}</div>
    <img src={post.image} />
    <div>{post.votes}</div>
  </li>
);

export default Post;
