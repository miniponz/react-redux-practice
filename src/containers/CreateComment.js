import { connect } from 'react-redux';
import { createComment } from '../actions/commentActions';
import CommentForm from '../components/CommentForm';

const matchDispatchToProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(createComment(props.postId, comment));
  }
});

export default connect(
  null, 
  matchDispatchToProps
)(CommentForm);
