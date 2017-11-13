import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!!</Text>
        <Text>I am Anna</Text>
        <Text>I make apps</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#debec5',
    borderWidth: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
