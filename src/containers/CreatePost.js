import { connect } from 'react-redux';
import { addPost } from '../actions/blogActions';
import PostForm from '../components/PostForm';

const matchDispatchToProps = dispatch => ({
  onSubmit(title, body) {
    dispatch(addPost(title, body));
  }
});

export default connect(
  null, 
  matchDispatchToProps
)(PostForm);
