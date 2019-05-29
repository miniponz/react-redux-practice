import React from 'react';
import PropTypes from 'prop-types';
import CommentsByPostId from '../containers/CommentsByPostId';
import CreateComment from '../containers/CreateComment';

function PostDetail({ post }) {
  return (
    <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <div>
      <CreateComment postId={post.id}/>
      <CommentsByPostId postId={post.id}/>
    </div>
    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostDetail;
