import { createStore } from 'redux';
import { CREATE_POST, DELETE_POST, DELETE_ALL_POSTS, addPost, deletePost, deleteAllPosts } from './actions/blogActions';

const initialState = {
  posts: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_ALL_POSTS:
      return { posts: [] };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter((post) => post.title !== action.payload) };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(addPost({ title: 'my title', body: 'here is a blog post' }));
console.log(store.getState());

store.dispatch(addPost({ title: 'i like tea', body: 'let me tell you all about i like tea' }));
console.log(store.getState());

store.dispatch(deletePost('my title'));
console.log(store.getState());

store.dispatch(deleteAllPosts());
console.log(store.getState());


