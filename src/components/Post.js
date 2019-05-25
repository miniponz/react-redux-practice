import React from 'react';
import PropTypes from 'prop-types';

function Post({ post, deletePost }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={deletePost.bind(null, post.id)}>delete this post?</button>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default Post;
