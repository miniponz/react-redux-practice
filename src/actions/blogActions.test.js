import { CREATE_POST, addPost } from './blogActions';

describe('blog action tests', () => {
  it('creates a post', () => {
    expect(addPost({ title: 'stuff', body: 'what' })).toEqual({
      payload: {
        title: 'stuff', body: 'what'
      },
      type: CREATE_POST
    });
  });
});
