import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts, deletePost }) {
  const postList = posts.map((post) => {
    return (
      <li key={post.id}>
        <Post post={post} deletePost={deletePost}/>
      </li>
    );
  });

  return (
    <ul style={{ listStyle: 'none' }}>{postList}</ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default Posts;

