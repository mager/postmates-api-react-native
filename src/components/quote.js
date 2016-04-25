var React = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  TextInput
} = React;

import Button from './common/button';
import axios from 'axios';

const URL = 'https://api.postmates.com/v1/customers';
const CUSTOMER_ID = 'cus_KS6jC-OiyUEtEV';
const API_KEY = 'Basic Nzc2ZmE0OTMtYmY1ZC00YjNiLWIyYzktOWVhN2Q1ZWRiZGZhOg==';
const CONFIG = {
    headers: {'Authorization': API_KEY},
}



module.exports = React.createClass({
  getInitialState: function() {
    return {
        pickup_address: '',
        dropoff_address: ''
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Get a delivery quote</Text>

        <Text style={styles.label}>Pickup address:</Text>
        <TextInput
          style={styles.input}
          value={this.state.pickup_address}
          onChangeText={(text) => this.setState({
            pickup_address: text
          })} />

        <Text style={styles.label}>Dropoff address:</Text>
        <TextInput
          style={styles.input}
          value={this.state.dropoff_address}
          onChangeText={(text) => this.setState({
            dropoff_address: text
          })} />

        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Get Quote'} onPress={this.onPress} />
      </View>
    );
  },
  onPress: function() {
    const REQUEST_URL = `${URL}/${CUSTOMER_ID}/delivery_quotes`
    console.log(REQUEST_URL);

    axios.post(REQUEST_URL, {
        pickup_address: '100 Market St, San Francisco, CA',
        dropoff_address: '425 Market St, San Francisco, CA'
      }, CONFIG)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 3,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
