import { CREATE_POST, DELETE_POST, DELETE_ALL_POSTS } from '../actions/blogActions';
// import { UPDATE_POST_BY_TITLE } from '../actions/blogActions';

const initialState = {
  posts: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_ALL_POSTS:
      return { posts: [] };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter((post) => post.title !== action.payload) };
    // case UPDATE_POST_BY_TITLE:
    //   return { ...state, posts: state.posts.map((post) => {
    //     if(post.title === action.payload.title)
    //   })};
    default:
      return state;
  }
}


// store.dispatch(addPost({ title: 'my title', body: 'here is a blog post' }));
// console.log(store.getState());

// store.dispatch(addPost({ title: 'i like tea', body: 'let me tell you all about i like tea' }));
// console.log(store.getState());

// store.dispatch(deletePost('my title'));
// console.log(store.getState());

// store.dispatch(deleteAllPosts());
// console.log(store.getState());
