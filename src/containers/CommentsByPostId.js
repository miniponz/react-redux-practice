import { connect } from 'react-redux';
import Comments from '../components/Comments';
import { getComments } from '../selectors/commentSelector';
import { deleteComment } from '../actions/commentActions';

const mapStateToProps = (state, { postId }) => ({
  comments: getComments(state, postId)
});

const mapDispatchToProps = (dispatch, { postId }) => ({
  deleteComment()
})