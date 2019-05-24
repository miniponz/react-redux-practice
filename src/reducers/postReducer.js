import { CREATE_POST, DELETE_POST, DELETE_ALL_POSTS } from '../actions/blogActions';
import { UPDATE_POST_BY_TITLE } from '../actions/blogActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    case DELETE_ALL_POSTS:
      return state = [];
    case DELETE_POST:
      return state.filter((post) => post.title !== action.payload);
    case UPDATE_POST_BY_TITLE:
      return { ...state, posts: state.posts.map((post) => {
        if(post.title === action.payload.title) {
          return { title: post.title, body: action.payload.body };
        }
        return post;
      }) 
      };
    default:
      return state;
  }
}


