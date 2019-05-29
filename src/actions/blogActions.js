export const CREATE_POST = 'CREATE_POST';
export const addPost = (title, body) => ({
  type: CREATE_POST,
  payload: { title, body }
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = id => ({
  type: DELETE_POST,
  payload: id
});

export const DELETE_ALL_POSTS = 'DELETE_ALL_POSTS';
export const deleteAllPosts = () => ({
  type: DELETE_ALL_POSTS
});

export const UPDATE_POST_BY_ID = 'UPDATE_POST_BY_ID';
export const updatePost = (id, body) => ({
  type: UPDATE_POST_BY_ID,
  payload: { id, body }
});
