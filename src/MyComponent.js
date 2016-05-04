import React, {
  StyleSheet,
  PropTypes,
  Image,
  View,
  Text,
} from 'react-native';

export default class MyComponent extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('./react.png')}/>
        <Text>I wonder if there will be any problems...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
