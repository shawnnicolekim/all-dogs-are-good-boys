import React from 'react';
import PropTypes from 'prop-types';
import PostEntry from './PostEntry.jsx';

const PostList = ({ posts }) => (
  <div>
    {posts.map((post) => <PostEntry post={post} />)}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
