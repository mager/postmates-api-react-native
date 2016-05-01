var React = require('react-native');
var {
    Navigator,
    StyleSheet
} = React;

var Landing = require('./components/landing');
var Quote = require('./components/quote');

var ROUTES = {
    landing: Landing,
    quote: Quote
}


module.exports = React.createClass({
    renderScene: function(route, navigator) {
        var Component = ROUTES[route.name]; // ROUTES['signin'] => SignIn
        return <Component route={route} navigator={navigator} />;
    },
    render: function() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{name: 'landing'}}
                renderScene={this.renderScene}
                configureScene={() => {
                    return Navigator.SceneConfigs.PushFromRight;
                }} />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
