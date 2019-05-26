import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment, deleteComment }){
  return (
    <div>
      <p>{comment}</p>
      <button onClick={deleteComment.bind(null, comment.id)}>...delete comment?</button>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default Comment;

