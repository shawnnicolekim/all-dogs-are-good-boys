import React from 'react';
import PropTypes from 'prop-types';
import PostBar from './PostBar.jsx';
import * as Styled from './postStyles.jsx';

const PostEntry = ({ post }) => (
  <Styled.PostEntryWrapper>
    <Styled.PostHeader>
      <Styled.HeaderAvatar avatar={post.avatar} />
      <Styled.HeaderUsername>
        {post.username}
      </Styled.HeaderUsername>
      <Styled.HeaderTimestamp>
        {post.timestamp}
      </Styled.HeaderTimestamp>
    </Styled.PostHeader>
    <Styled.PostCaption>
      {post.caption}
    </Styled.PostCaption>
    <Styled.PostImage image={post.image} />
    <PostBar />
  </Styled.PostEntryWrapper>
);

PostEntry.propTypes = {
  post: PropTypes.objectOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequires,
    }).isRequired,
  ).isRequired,
};

export default PostEntry;
