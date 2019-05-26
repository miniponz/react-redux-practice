import { connect } from 'react-redux';
import Comments from '../components/Comments';
import { getComments } from '../selectors/commentSelector';
import { deleteComment } from '../actions/commentActions';

const mapStateToProps = (state, props) => ({
  comments: getComments(state, props.match.params.postId)
});

const mapDispatchToProps = (dispatch, { postId }) => ({
  deleteComment(commentId) {
    dispatch(deleteComment(postId, commentId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
