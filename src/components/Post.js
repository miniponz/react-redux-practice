import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 

function Post({ post, deletePost }) {
  return (
    <div>
      <Link to={`/posts/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
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
