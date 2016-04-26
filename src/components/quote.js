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
            pickup_address: '1 ferry building, sf, ca',
            dropoff_address: '425 market, sf, ca',
            quote_price: ''
        };
    },
    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.main}>
                    <Text style={styles.title}>Get a delivery quote</Text>

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
                    <Text style={styles.quote_price}>{this.state.quote_price}</Text>
                    <Button text={'Get Quote'} onPress={this.onPress} />
                </View>
                <View style={styles.map}>
                    <Text>
                        This is a map.
                    </Text>
                </View>
            </View>
        );
    },
    onPress: function() {
        const REQUEST_URL = `${URL}/${keys.customer_key}/delivery_quotes`;
        var data = querystring.stringify({
            pickup_address: this.state.pickup_address,
            dropoff_address: this.state.dropoff_address
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
        .then((response) => {
            this.setState({
                quote_price: this.formatQuote(response.data.fee)
            });
        })
        .catch((response) => {
            console.log(response);
        });
    },
    formatQuote: function(quote) {
        return `$${(quote/100).toFixed(2)}`;
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 1
    },
    map: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    input: {
        padding: 3,
        height: 32,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 3,
        margin: 10,
        width: 300,
        alignSelf: 'flex-start'
    },
    title: {
        fontSize: 18,
        marginBottom: 20
    },
    label: {
        fontSize: 12,
        width: 300,
        alignSelf: 'flex-start'
    },
    quote_price: {
        fontSize: 24,
        color: 'lime'
    }
});
