export const CREATE_COMMENT = 'CREATE_COMMENT';
export const addComment = (postId, comment, id) => ({
  type: CREATE_COMMENT,
  payload: { postId, comment, id }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postId, commentId) => ({
  type: DELETE_COMMENT,
  payload: { postId, commentId }
});
