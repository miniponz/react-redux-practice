import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';
import uuid from 'uuid/v4';

const initialState = {
  comments: {}
};


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      // eslint-disable-next-line no-case-declarations
      const { postId, comment } = action.payload;
      return createComment(postId, comment, state);
    case DELETE_COMMENT:
      return { ...state, comments: state.comments.filter(comment => comment.postTitle !== action.payload.postTitle || state.comments.indexOf(comment) !== action.payload.commentIndex) };
    default:
      return state;
  }
}
      
      
function createComment(postId, comment, id, state){  
  if(state[postId]) {
    return { ...state, [postId]: [...state[postId], { id, comment }] };
  }
  return { ...state, [postId]: { id, comment } };
}
