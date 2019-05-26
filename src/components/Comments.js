import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import uuid from 'uuid/v4';

function Comments({ comments }) {
  const id = uuid();
  const commentList = comments.map(comment => {
    return (
      <li key={id}>
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
