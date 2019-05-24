import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: 'title here!',
    body: 'body here'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.onSubmit(title, body);
    this.setState({ title: 'billy strings', body: 'sean loves billy strings' });
  }

  render() {
    const { title, body } = this.state;
    return (
      <>
      <h1>Make a Post!</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={title} onChange={this.handleChange}/>
        <input type="textarea" name="body" value={body} onChange={this.handleChange}/>
        <button>...submit post...</button>
      </form>
      </>
    );
  }
}
