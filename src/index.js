import { createStore } from 'redux';
import reducer from './reducers/index';
import { addPost } from './actions/blogActions';
import { addComment, deleteComment } from './actions/commentActions';

const store = createStore(reducer);

console.log(store.getState());


store.dispatch(addPost({ title: 'post', body: 'here is a post' }));
console.log(store.getState());

store.dispatch(addComment('post', 'here is a comment'));
store.dispatch(addComment('post', 'here is another comment'));
console.log(store.getState());


store.dispatch(deleteComment('post', 0));
console.log(store.getState());
