import { CREATE_POST, DELETE_POST, DELETE_ALL_POSTS } from '../actions/blogActions';
import { UPDATE_POST_BY_ID } from '../actions/blogActions';
import uuid from 'uuid/v4';

const initialState = {};

export default function reducer(state = initialState, action) {
  const id = uuid();
  switch(action.type) {
    case CREATE_POST: {
      const { title, body } = action.payload;
      return { ...state, [id]: { id, title, body } };
    }
    case DELETE_ALL_POSTS:
      return state = [];
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload);
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


