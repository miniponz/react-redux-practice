import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {
  comments: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case DELETE_COMMENT:
      return { ...state, comments: state.comments.filter(comment => comment.postTitle !== action.payload.postTitle && state.comments.indexOf(comment) !== action.payload.commentIndex) };
    default:
      return state;
  }
}
