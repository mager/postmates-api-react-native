var React = require('react-native');
var {
  Navigator,
  StyleSheet
} = React;

var Quote = require('./components/quote');

var ROUTES = {
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
            initialRoute={{name: 'quote'}}
            renderScene={this.renderScene}
            configureScene={() => {
                return Navigator.SceneConfigs.FloatFromRight;
            }} />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
