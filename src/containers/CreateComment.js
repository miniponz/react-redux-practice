import { connect } from 'react-redux';
import { addComment } from '../actions/commentActions';
import CommentForm from '../components/CommentForm';

const matchDispatchToProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(addComment(props.postId, comment));
  }
});

export default connect(
  null, 
  matchDispatchToProps
)(CommentForm);
