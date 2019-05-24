import { connect } from 'react-redux';
import { getPosts } from '../selectors/postSelectors';
import Posts from '../components/Posts';
import { deletePost } from '../actions/blogActions';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  deletePost(id) {
    dispatch(deletePost(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
