export const CREATE_POST = 'CREATE_POST';
export const addPost = (post) => ({
  type: CREATE_POST,
  payload: post
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = title => ({
  type: DELETE_POST,
  payload: title
});

export const DELETE_ALL_POSTS = 'DELETE_ALL_POSTS';
export const deleteAllPosts = () => ({
  type: DELETE_ALL_POSTS
});

export const UPDATE_POST_BY_TITLE = 'UPDATE_POST_BY_TITLE';
export const updatePost = title => ({
  type: UPDATE_POST_BY_TITLE,
  payload: title
});
