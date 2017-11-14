import React from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  learnMore() {
    Alert.alert('Oye como va, mi ritmo')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!!</Text>
        <Text style={styles.name}>I am Anna</Text>
        <Text>I make apps</Text>
        <Button onPress={this.learnMore} title="Learn More" color="#841584" style={styles.button} />
        <TextInput style={{height:40}} placeholder="Type here" onChangeText={(text) => this.setState({text})} />
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
  name: {
    fontSize: 20,
    margin: 30,
    borderColor: 'purple',
    borderWidth: 2,
    padding: 10
  },
  button: {
    color: "#841584", 
    padding: 10,
    margin: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: "#841584",
  }
});
