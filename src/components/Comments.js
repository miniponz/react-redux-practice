import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments }) {
  const commentList = comments.map(comment => {
    return (
      <li key={comment.id}>
        <Comment id={comment.id} comment={comment.comment} deleteComment={comment.deleteComment} />
      </li>
    );
  });

  return (
    <ul>{commentList}</ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};
export default Comments;
