import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
 static propTypes = {
   onSubmit: PropTypes.func.isRequired
 }

  state = {
    id: '',
    comment: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  //slice params at 12.
  handleSubmit = event => {
    event.preventDeafult();
    const { comment } = this.state;
    const id = window.location.pathname.slice(12);
    this.props.onSubmit(id, comment);
    this.setState({ id: '', comment: 'make a comment?' });
  }

  render() {
    const { comment } = this.state;
    return (
      <>
      <h3>Make a Comment!</h3>
      <form onSubmit={this.handleSubmit}>
        <input type="textarea" name="comment" value={comment} onChange={this.handleChange}/>
        <button>...submit comment...</button>
      </form>
      </>
    );
  }
}
