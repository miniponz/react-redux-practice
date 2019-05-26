import React from 'react';
import PropTypes from 'prop-types';

function Comment({ id, comment, deleteComment }){
  return (
    <div>
      <p>{comment}</p>
      <button onClick={deleteComment.bind(null, id)}>...delete comment?</button>
    </div>
  );
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default Comment;

