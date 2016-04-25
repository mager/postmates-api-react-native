var React = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  TextInput
} = React;

import keys from '../config/keys';
import Button from './common/button';
import axios from 'axios';
import querystring from 'querystring';

const URL = 'https://api.postmates.com/v1/customers';


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
    const REQUEST_URL = `${URL}/${keys.customer_key}/delivery_quotes`;

    var data = querystring.stringify({
      pickup_address: '100 Market St, San Francisco, CA',
      dropoff_address: '425 Market St, San Francisco, CA'
    });

    axios({
        method: 'post',
        url: REQUEST_URL,
        data: data,
        headers: {
          'Authorization': keys.api_key,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
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
