
export const getPosts = state => state.posts;
export const getPost = (state, id) => {
  return state.posts[id];
};
