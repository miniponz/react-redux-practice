import { CREATE_POST, DELETE_POST, DELETE_ALL_POSTS } from '../actions/blogActions';
import { UPDATE_POST_BY_ID } from '../actions/blogActions';
import uuid from 'uuid/v4';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST: {
      const id = uuid();
      const { title, body } = action.payload;
      return { ...state, [id]: { id, title, body } };
    }
    case DELETE_ALL_POSTS:
      return state = {};
      //needs update for obj. notation from here down.
    case DELETE_POST: 
      // eslint-disable-next-line no-case-declarations
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    case UPDATE_POST_BY_ID:
      return { ...state, posts: state.posts.map((post) => {
        if(post.id === action.payload.id) {
          return { title: post.title, body: action.payload.body };
        }
        return post;
      }) 
      };
    default:
      return state;
  }
}


