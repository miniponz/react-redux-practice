import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments, deleteComment }) {
  const commentList = comments.map(comment => {
    return (
      <li key={comment.id}>
        <Comment id={comment.id} comment={comment.comment} deleteComment={deleteComment} />
      </li>
    );
  });

  return (
    <ul style={{ listStyle: 'none' }}>{commentList}</ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired
};
export default Comments;
