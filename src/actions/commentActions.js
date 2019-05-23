export const CREATE_COMMENT = 'CREATE_COMMENT';
export const addComment = (postTitle, comment) => ({
  type: CREATE_COMMENT,
  payload: { postTitle, comment }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postTitle, commentIndex) => ({
  type: DELETE_COMMENT,
  payload: { postTitle, commentIndex }
});
