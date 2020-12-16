import React from 'react';
import PropTypes from 'prop-types';

const PostEntry = ({ post }) => (
  <div>
    postentry
    {post.caption}
  </div>
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
