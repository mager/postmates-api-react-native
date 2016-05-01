var React = require('react-native');
var { Image, Link, View, Text, StyleSheet } = React;
import Button from './common/button';


module.exports = React.createClass({
    onPress: function() {
        this.props.navigator.push({name: 'quote'});
    },
    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.main}>
                    <Image
                        style={styles.logo}
                        source={require('../static/images/logo-postmates.png')} />
                </View>
                <View style={styles.buttons}>
                    <Text style={styles.intro}>
                        Learn how to use the Postmates API with React Native
                    </Text>
                    <Button
                        text={'Get a Delivery Quote'}
                        style={styles.button}
                        onPress={this.onPress} />
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    button: {
        backgroundColor: '#f0f'
    },
    intro: {
        marginBottom: 20,
        fontFamily: 'Helvetica Neue',
        fontSize: 18,
        textAlign: 'center'
    },
    logo: {
        width: 161,
        height: 138
    }
});
