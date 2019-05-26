import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';
import uuid from 'uuid/v4';

const initialState = {
  comments: {}
};


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      // eslint-disable-next-line no-case-declarations
      const id = uuid();
      return {
        ...state,
        [action.payload.postId]: [
          ...(state[action.payload.postId] || []),
          action.payload.comment, id
        ]
      };
    case DELETE_COMMENT:
      return { ...state, comments: state.comments.filter(comment => comment.postTitle !== action.payload.postTitle || state.comments.indexOf(comment) !== action.payload.commentIndex) };
    default:
      return state;
  }
}
      
      
