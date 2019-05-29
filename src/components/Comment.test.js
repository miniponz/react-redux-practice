import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment';

describe('Display Component', () => {
  it('displays stuff!', () => {
    const wrapper = shallow(<Comment deleteComment={jest.fn()} comment={'text'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
