import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import MyComponent from '../src/MyComponent';
import { expect } from 'chai';

describe('<MyComponent />', () => {
  it('should render stuff', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.contains(<Text>I wonder if there will be any problems...</Text>)).to.equal(true);
  });
});
