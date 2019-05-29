import { addPost, deleteAllPosts, deletePost } from '../actions/blogActions';
import reducer from './postReducer';

describe('post reducer tests', () => {
  it('creates a post', () => {
    const initialState = {
      posts: []
    };

    const newState = reducer(initialState, addPost({ title: 'stuff', body: 'notes notes' }));

    expect(newState).toEqual({
      posts: [
        { title: 'stuff', body: 'notes notes' }
      ]
    });
  });

  it('deletes all posts', () => {
    const initialState = {
      posts: [{ title: 'stuff', body: 'notes notes' }]
    };

    const newState = reducer(initialState, deleteAllPosts());

    expect(newState).toEqual({
      posts: []
    });
  });

  it('deletes a post', () => {
    const initialState = {
      posts: [{ title: 'stuff', body: 'notes notes' }, { title: 'things', body: 'stuff stuff' }]
    };

    const newState = reducer(initialState, deletePost('stuff'));

    expect(newState).toEqual({
      posts: [{ title: 'things', body: 'stuff stuff' }]
    });
  });

});

