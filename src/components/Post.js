import React from 'react';
import PropTypes from 'prop-types';

function Post({ title }) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired
};

export default Post;
