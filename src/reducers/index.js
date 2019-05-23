import { combineReducers } from 'redux';
import blog from './postReducer';
import comment from './commentReducer';

export default combineReducers({
  blog,
  comment
});

