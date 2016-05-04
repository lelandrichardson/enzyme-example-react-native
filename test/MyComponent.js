import React, { View, Image, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import MyComponent from '../src/MyComponent';
import { expect } from 'chai';
import mockery from 'mockery';

const IMAGE_SUBSTITUTE = {uri: 'placeholder.png'};

describe('<MyComponent />', () => {
  before(() => {
    mockery.enable();
    mockery.registerMock('./react.png', IMAGE_SUBSTITUTE);
  });

  after(() => {
    mockery.disable();
  });

  it('should render stuff', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.contains(<Text>I wonder if there will be any problems...</Text>)).to.equal(true);
    expect(wrapper.contains(<Image source={IMAGE_SUBSTITUTE}/>)).to.equal(true);
  });
});
