import { CREATE_POST, addPost, DELETE_POST, deletePost, DELETE_ALL_POSTS, deleteAllPosts } from './blogActions';

describe('blog action tests', () => {
  it('creates a post', () => {
    expect(addPost({ title: 'stuff', body: 'what' })).toEqual({
      payload: {
        title: 'stuff', body: 'what'
      },
      type: CREATE_POST
    });
  });

  it('deletes a post', () => {
    expect(deletePost('title')).toEqual({
      payload: 'title',
      type: DELETE_POST
    });
  });

  it('deletes a post', () => {
    expect(deleteAllPosts()).toEqual({
      type: DELETE_ALL_POSTS
    });
  });

});

