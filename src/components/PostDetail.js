import React from 'react';
import PropTypes from 'prop-types';

function PostDetail({ post }) {
  return (
    <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostDetail;
