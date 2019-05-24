import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts }) {
  const postList = posts.map((post) => {
    return (
      <li key={post.id}>
        <Post title={post.title}/>
      </li>
    );
  });

  return (
    <ul>{postList}</ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;

