import { getComments } from '../selectors/commentSelector';

describe('comment selector', () => {
  it('gets all comments by post title', () => {
    const initialState = {
      comments: [
        { title: 'post1', comment: 'comment on post1' },
        { title: 'post1', comment: 'comment on post1' },
        { title: 'post2', comment: 'comment on post2' },
        { title: 'post2', comment: 'comment on post2' }
      ]
    };

    expect(getComments(initialState, 'post1')).toEqual([
      { title: 'post1', comment: 'comment on post1' },
      { title: 'post1', comment: 'comment on post1' }
    ]);
  });
});
