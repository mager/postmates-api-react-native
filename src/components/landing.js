var React = require('react-native');
var { Link, View, Text, StyleSheet } = React;
import Button from './common/button';


module.exports = React.createClass({
    onPress: function() {
        this.props.navigator.push({name: 'quote'});
    },
    render: function() {
        return (
            <View style={styles.container}>
                <Text>Postmates</Text>
                <Button
                    text={'Get a Delivery Quote'}
                    style={styles.button}
                    onPress={this.onPress} />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    button: {
        width: 100
    }
});
