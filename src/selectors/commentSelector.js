export const getComments = (state, postTitle) => {
  return state.comments.filter(comment => comment.title === postTitle);
};
