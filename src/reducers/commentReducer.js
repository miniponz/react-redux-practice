import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';
import uuid from 'uuid/v4';

const initialState = {};


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT: {
      const id = uuid();
      const { postId, comment } = action.payload;
      const comments = state[postId] || [];
      return {
        ...state,
        [postId]: [...comments, { comment, id }]
      };
    }
    case DELETE_COMMENT: { 
      const { postId, commentId } = action.payload;
      return { ...state, 
        [postId]: state[postId].filter(comment => comment.id !== commentId) || []
        
      };
    }
    default:
      return state;
  }
}
      
      
