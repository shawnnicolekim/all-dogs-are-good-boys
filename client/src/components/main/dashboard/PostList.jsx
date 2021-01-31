import React from 'react';
import PropTypes from 'prop-types';
import PostEntry from './PostEntry.jsx';
import * as Styled from './postStyles.jsx';

const PostList = ({ posts }) => (
  <Styled.PostListWrapper>
    {posts.map((post) => <PostEntry post={post} />)}
  </Styled.PostListWrapper>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
