import { getPosts, getPost } from './postSelectors';

describe('post selectors', () => {
  it('gets all posts', () => {
    const initialState = {
      posts: [
        { title: 'a post', body: 'a post body' },
        { title: 'a post', body: 'a post body' }
      ]
    };

    expect(getPosts(initialState)).toEqual([
      { title: 'a post', body: 'a post body' },
      { title: 'a post', body: 'a post body' }
    ]);
  });

  it('gets a post by array position', () => {
    const initialState = {
      posts: [
        { title: 'a post', body: 'a post body' },
        { title: 'second post', body: 'a post body' }
      ]
    };

    expect(getPost(initialState, 1)).toEqual({ title: 'second post', body: 'a post body' });
  });
});
