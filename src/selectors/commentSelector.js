export const getAllComments = state => Object.values(state.comments);
export const getComments = (state, postId) => {
  return state.comments[postId] || [];
};

