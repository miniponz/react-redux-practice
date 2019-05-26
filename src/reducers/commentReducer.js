import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {
  comments: {}
};


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      // eslint-disable-next-line no-case-declarations
      const { id, comment } = action.payload;
      return createComment(id, comment, state);
    case DELETE_COMMENT:
      return { ...state, comments: state.comments.filter(comment => comment.postTitle !== action.payload.postTitle || state.comments.indexOf(comment) !== action.payload.commentIndex) };
    default:
      return state;
  }
}
      
      
function createComment(id, comment, state){  
  if(state[id]) {
    return { ...state, [id]: [...state[id], { id, comment }] };
  }
  return { ...state, [id]: { id, comment } };
}
